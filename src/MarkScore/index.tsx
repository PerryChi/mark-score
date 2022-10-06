import React, { useState, useEffect } from 'react';
import OneStar from './OneStar/index';
import './index.less';

const MarkScore = (props: any) => {
  const {
    starCount = 5,
    allowClear = true,
    allowHalf = false,
    disabled = false,
    value = 0,
    onChange = undefined,
    size = 'm',
    style = {},
  } = props;

  const [score, setScore] = useState<number>(value);

  useEffect(() => {
    let newScore = value;
    if (typeof value !== 'number' || value < 0) {
      newScore = 0;
    }
    if (value > starCount) {
      newScore = starCount;
    }
    setScore(newScore);
  }, [value]);

  const clickStar = (event: any) => {
    if (disabled) {
      return;
    }
    const { info = '' } = event.target.dataset;
    const [halfOrWhole, sequence] = info.split('.');
    let newScore = 0;
    if (allowHalf) {
      if (halfOrWhole === 'half') {
        newScore = Number(sequence) - .5;
      }
      if (halfOrWhole === 'right') {
        newScore = +sequence;
      }
    } else {
      newScore = +sequence;
    }
    if (allowClear && newScore === score) {
      newScore = 0;
    }
    if (onChange) {
      onChange(newScore);
    }
    setScore(newScore);
  }
  const prefixCls = 'perrychi-markscore'

  return (
    <div className={prefixCls} style={style} onClick={clickStar}>
      {
        new Array(starCount).fill(1).map((_, index) => {
          return (
            <OneStar
              key={index}
              {...{
                sequence: index + 1,
                allowHalf,
                score,
                size,
                prefixCls,
                style,
              }}
            />
          )
        })
      }
    </div>
  )
}

export default MarkScore;
