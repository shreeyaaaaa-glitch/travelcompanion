
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [result, setResult] = useState<number | null>(null);

  // Mock exchange rates to NPR (Nepali Rupees)
  const exchangeRates = {
    USD: 133.5,
    EUR: 144.2,
    GBP: 165.8,
    INR: 1.6,
    CNY: 18.4,
    JPY: 0.89,
    AUD: 87.3,
    CAD: 98.2
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' }
  ];

  const convertCurrency = () => {
    if (amount && fromCurrency) {
      const rate = exchangeRates[fromCurrency as keyof typeof exchangeRates];
      const converted = parseFloat(amount) * rate;
      setResult(converted);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-green-50">
        <CardTitle className="text-green-800 flex items-center">
          💱 Currency Converter
        </CardTitle>
        <p className="text-sm text-green-600">Convert to Nepali Rupees (NPR)</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From Currency</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.flag} {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={convertCurrency} 
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={!amount}
          >
            Convert to NPR
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-center">
                <p className="text-sm text-gray-600">Converted Amount</p>
                <p className="text-2xl font-bold text-green-800">
                  NPR {result.toLocaleString('en-NP', { maximumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {amount} {fromCurrency} = NPR {result.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          <div className="text-xs text-gray-500">
            * Exchange rates are approximate and may vary
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
