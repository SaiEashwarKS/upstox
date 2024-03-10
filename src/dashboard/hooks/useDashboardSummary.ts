import {useEffect, useState} from 'react';
import {Holding} from '../types/dashboardTypes';

export const useDashboardSummary = (holdings: Holding[]) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [oneDayPnl, setOneDayPnl] = useState(0);
  const [totalPnl, setTotalPnl] = useState(0);

  useEffect(() => {
    let _currentValue = 0;
    let _investedAmount = 0;
    let _oneDayPnl = 0;
    for (let i = 0; i < holdings.length; i++) {
      const {ltp, quantity, close, avgPrice} = holdings[i];
      _currentValue += quantity * ltp;
      _investedAmount += quantity * avgPrice;
      _oneDayPnl += (close - ltp) * quantity;
    }

    setCurrentValue(_currentValue);
    setInvestedAmount(_investedAmount);
    setOneDayPnl(_oneDayPnl);
    setTotalPnl(_currentValue - _investedAmount);
  }, [holdings]);

  return {currentValue, investedAmount, oneDayPnl, totalPnl};
};
