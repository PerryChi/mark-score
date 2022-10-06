import React from 'react';

const OneStar = (props: any) => {
  const {
    sequence,
    score,
    allowHalf,
    size = 'm',
    prefixCls = '',
    style = {},
  } = props;

  const sizeMap: any = {
    xxs: '4vw',
    xs: '5vw',
    s: '6vw',
    m: '7vw',
    l: '8vw',
    xl: '9vw',
    xxl: '10vw',
    xxxl: '11vw',
    xxxxl: '12vw',
  };

  const sizeVal: any = sizeMap[size || 'm'] || sizeMap.m;

  const halfStyle = {
    ...style,
    width: sizeVal,
    height: sizeVal,
  };

  return (
    <div className={`${prefixCls}-oneStarBox ${prefixCls}-defaultColor`} style={style}>
      <div className={`${prefixCls}-oneStarBox-leftHalf`} data-info={`half.${sequence}`} style={halfStyle}>
      </div>
      <div className={`${prefixCls}-oneStarBox-rightHalf`} data-info={`right.${sequence}`} style={halfStyle}>
      </div>
      {
        // star-empty
        ((!allowHalf && sequence - score > 0) || (allowHalf && sequence - score > 0.5)) &&
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9073"
          width={sizeVal}
          height={sizeVal}
        ><path d="M686.285714 573.714286l174.857143-169.714286-241.142857-35.428571-108-218.285715-108 218.285715-241.142857 35.428571 174.857143 169.714286-41.714286 240.571428 216-113.714285 215.428571 113.714285z m301.142857-204q0 12.571429-14.857142 27.428571l-207.428572 202.285714 49.142857 285.714286q0.571429 4 0.571429 11.428572 0 28.571429-23.428572 28.571428-10.857143 0-22.857142-6.857143l-256.571429-134.857143-256.571429 134.857143q-12.571429 6.857143-22.857142 6.857143-12 0-18-8.285714T208.571429 896.571429q0-3.428571 1.142857-11.428572l49.142857-285.714286L50.857143 397.142857q-14.285714-15.428571-14.285714-27.428571 0-21.142857 32-26.285715l286.857142-41.714285L484 41.714286q10.857143-23.428571 28-23.428572t28 23.428572l128.571429 260 286.857142 41.714285q32 5.142857 32 26.285715z" p-id="9074"></path></svg>
      }
      {
        // star-half
        (allowHalf && sequence - score > 0 && sequence - score <= .5) &&
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8934"
          width={sizeVal}
          height={sizeVal}><path d="M714.285714 546.857143l146.857143-142.857143-203.428571-29.714286-37.714286-5.714285-17.142857-34.285715-90.857143-184v550.285715l33.714286 17.714285 181.714285 96-34.285714-202.857143-6.857143-37.714285z m258.285715-149.714286l-207.428572 202.285714 49.142857 285.714286q2.857143 18.857143-3.428571 29.428572t-19.428572 10.571428q-9.714286 0-22.857142-6.857143l-256.571429-134.857143-256.571429 134.857143q-13.142857 6.857143-22.857142 6.857143-13.142857 0-19.428572-10.571428t-3.428571-29.428572l49.142857-285.714286L50.857143 397.142857q-18.285714-18.285714-13.142857-34t30.857143-19.714286l286.857142-41.714285L484 41.714286q11.428571-23.428571 28-23.428572 16 0 28 23.428572l128.571429 260 286.857142 41.714285q25.714286 4 30.857143 19.714286t-13.714285 34z" p-id="9213"></path></svg>
      }
      {
        // star-fill
        sequence - score <= 0 &&
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8795"
          width={sizeVal}
          height={sizeVal}
        ><path d="M987.428571 369.714286q0 12.571429-14.857142 27.428571l-207.428572 202.285714 49.142857 285.714286q0.571429 4 0.571429 11.428572 0 12-6 20.285714T791.428571 925.142857q-10.857143 0-22.857142-6.857143l-256.571429-134.857143-256.571429 134.857143q-12.571429 6.857143-22.857142 6.857143-12 0-18-8.285714T208.571429 896.571429q0-3.428571 1.142857-11.428572l49.142857-285.714286L50.857143 397.142857q-14.285714-15.428571-14.285714-27.428571 0-21.142857 32-26.285715l286.857142-41.714285L484 41.714286q10.857143-23.428571 28-23.428572t28 23.428572l128.571429 260 286.857142 41.714285q32 5.142857 32 26.285715z" p-id="8796"></path></svg>
      }
    </div>
  )
}

export default OneStar;
