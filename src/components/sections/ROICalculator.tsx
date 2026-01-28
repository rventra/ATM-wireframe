"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign } from "lucide-react";

export default function ROICalculator() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(2000);
  const [surchargeAmount, setSurchargeAmount] = useState(3.0);
  const [retailRate, setRetailRate] = useState(0.50);
  const [results, setResults] = useState({
    currentFeesPaid: 0,
    cashReadyFees: 0,
    youKeep: 0,
  });

  useEffect(() => {
    const wholesaleFee = 0.2;

    const currentFeesPaid = monthlyTransactions * retailRate;
    const cashReadyFees = monthlyTransactions * wholesaleFee;
    const youKeep = currentFeesPaid - cashReadyFees;

    setResults({
      currentFeesPaid,
      cashReadyFees,
      youKeep,
    });
  }, [monthlyTransactions, retailRate]);

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
      className="bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Revenue Calculator</h3>
          <p className="text-sm text-gray-400">See what you keep with wholesale rates</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Retail Rate Input */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-300 mb-2">
            <span>What do you currently pay per transaction?</span>
            <span className="text-green-400 font-semibold">${retailRate.toFixed(2)}</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              min="0.10"
              max="1.00"
              step="0.05"
              value={retailRate}
              onChange={(e) => setRetailRate(Number(e.target.value))}
              className="w-full h-10 pl-8 pr-4 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <input
            type="range"
            min="0.10"
            max="1.00"
            step="0.05"
            value={retailRate}
            onChange={(e) => setRetailRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500 mt-3"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0.10</span>
            <span>$1.00</span>
          </div>
        </div>

        {/* Monthly Transactions Slider */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-300 mb-2">
            <span>Monthly Transactions</span>
            <span className="text-green-400 font-semibold">{monthlyTransactions.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="100"
            max="50000"
            step="100"
            value={monthlyTransactions}
            onChange={(e) => setMonthlyTransactions(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>100</span>
            <span>50,000+</span>
          </div>
        </div>

        {/* Surcharge Amount Slider */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-300 mb-2">
            <span>Surcharge Amount</span>
            <span className="text-green-400 font-semibold">${surchargeAmount.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="1.5"
            max="5"
            step="0.25"
            value={surchargeAmount}
            onChange={(e) => setSurchargeAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$1.50</span>
            <span>$5.00</span>
          </div>
        </div>

        {/* Three Metric Output */}
        <div className="space-y-4 mt-8">
          {/* Current Fees Paid */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Current monthly fees paid:</p>
                <p className="text-xl font-bold text-red-400">{formatCurrency(results.currentFeesPaid)}</p>
              </div>
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-red-400" />
              </div>
            </div>
          </div>

          {/* CashReady Fees */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">With CashReady:</p>
                <p className="text-xl font-bold text-green-400">{formatCurrency(results.cashReadyFees)}</p>
              </div>
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">At $0.20 per transaction</p>
          </div>

          {/* You Keep */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            key={results.youKeep}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 font-medium">You keep:</p>
                <p className="text-3xl sm:text-4xl font-bold">+{formatCurrency(results.youKeep)}</p>
                <p className="text-sm text-green-200 mt-1">per month</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
