"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export default function ROICalculator() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(2000);
  const [surchargeAmount, setSurchargeAmount] = useState(3.0);
  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    monthlyUplift: 0,
    annualUplift: 0,
  });

  useEffect(() => {
    const retailFee = 0.5;
    const wholesaleFee = 0.2;

    const currentRevenue = monthlyTransactions * (surchargeAmount - retailFee);
    const potentialRevenue = monthlyTransactions * (surchargeAmount - wholesaleFee);
    const monthlyUplift = potentialRevenue - currentRevenue;
    const annualUplift = monthlyUplift * 12;

    setResults({
      currentRevenue,
      potentialRevenue,
      monthlyUplift,
      annualUplift,
    });
  }, [monthlyTransactions, surchargeAmount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Revenue Calculator</h3>
          <p className="text-sm text-gray-500">Estimate your monthly uplift with CashReady</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Monthly Transactions Slider */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Monthly Transactions</span>
            <span className="text-green-600 font-semibold">{monthlyTransactions.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="100"
            max="50000"
            step="100"
            value={monthlyTransactions}
            onChange={(e) => setMonthlyTransactions(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>100</span>
            <span>50,000+</span>
          </div>
        </div>

        {/* Surcharge Amount Slider */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Surcharge Amount</span>
            <span className="text-green-600 font-semibold">${surchargeAmount.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="1.5"
            max="5"
            step="0.25"
            value={surchargeAmount}
            onChange={(e) => setSurchargeAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$1.50</span>
            <span>$5.00</span>
          </div>
        </div>

        {/* Comparison Display */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-sm font-medium text-red-700">Retail Processing</span>
            </div>
            <p className="text-2xl font-bold text-red-700">{formatCurrency(results.currentRevenue)}</p>
            <p className="text-xs text-red-600 mt-1">per month after ~$0.50/tx fees</p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700">CashReady Wholesale</span>
            </div>
            <p className="text-2xl font-bold text-green-700">{formatCurrency(results.potentialRevenue)}</p>
            <p className="text-xs text-green-600 mt-1">per month after $0.20/tx fees</p>
          </div>
        </div>

        {/* Uplift Highlight */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          key={results.monthlyUplift}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mt-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-green-100 font-medium">Your Monthly Uplift</span>
              </div>
              <p className="text-3xl sm:text-4xl font-bold">{formatCurrency(results.monthlyUplift)}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <DollarSign className="w-5 h-5" />
                <span className="text-green-100 font-medium">Annual Impact</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold">{formatCurrency(results.annualUplift)}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
