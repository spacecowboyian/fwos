import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Item() {
  const router = useRouter();
  const { w1 = 'hunt', w2 = 'for', w3 = 'blue', w4 = 'october' } = router.query;

  const [color, setColor] = useState('black');
  const [batch, setBatch] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [alignment, setAlignment] = useState('right');

  // Apply body classes for CSS styling
  useEffect(() => {
    document.body.classList.add('item');
    return () => document.body.classList.remove('item');
  }, []);

  useEffect(() => {
    if (color === 'white') {
      document.body.classList.add('white-shirt');
    } else {
      document.body.classList.remove('white-shirt');
    }
  }, [color]);

  function handleBatchChange(e) {
    const val = e.target.value;
    setBatch(val);
    if (val === 'large') {
      setQuantity(13);
    } else {
      setQuantity(1);
    }
  }

  const shirtBg = color === 'white'
    ? `url(${BASE_PATH}/images/shirt-blank-white.png)`
    : `url(${BASE_PATH}/images/shirt-blank-black.png)`;

  const qtyMin = batch === 'large' ? 13 : 1;
  const qtyMax = batch === 'large' ? 50 : 12;

  return (
    <>
      <Head>
        <title>{`${w1} ${w2} ${w3} ${w4} — Four Words On Shirts`}</title>
        <meta name="description" content="Order your custom four-word shirt." />
      </Head>

      <header>
        <h1 className="logo">
          <Link href="/">
            Four<br />Words<br />On<br />Shirts
          </Link>
        </h1>
      </header>

      <div className="container">
        <section
          className="item-display"
          style={{ backgroundImage: shirtBg }}
        >
          <div className={`item-container align-${alignment}`}>
            <div className="words">
              <h2>
                <span>{w1}</span>
                <span>{w2}</span>
                <span>{w3}</span>
                <span>{w4}</span>
              </h2>
              <h3>fourwordsonshirts.com</h3>
            </div>
          </div>

          <div className="controls">
              <div className="controls-wrapper">
                <div className="align">
                  <button
                    type="button"
                    className={`align-btn${alignment === 'left' ? ' active' : ''}`}
                    onClick={() => setAlignment('left')}
                    title="Align left"
                  >
                    <i className="fa-solid fa-align-left"></i>
                  </button>
                  <button
                    type="button"
                    className={`align-btn${alignment === 'center' ? ' active' : ''}`}
                    onClick={() => setAlignment('center')}
                    title="Align center"
                  >
                    <i className="fa-solid fa-align-center"></i>
                  </button>
                  <button
                    type="button"
                    className={`align-btn${alignment === 'right' ? ' active' : ''}`}
                    onClick={() => setAlignment('right')}
                    title="Align right"
                  >
                    <i className="fa-solid fa-align-right"></i>
                  </button>
                </div>

                <div className="quantity">
                  <select
                    name="batch"
                    value={batch}
                    onChange={handleBatchChange}
                  >
                    <option value="small">Small (1–12)</option>
                    <option value="large">Large (13–50)</option>
                  </select>
                  <input
                    type="number"
                    name="quantity"
                    min={qtyMin}
                    max={qtyMax}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                </div>

                <div className="color">
                  <input type="hidden" name="color" value={color} />
                  <span
                    className={`swatch_black${color === 'black' ? ' active' : ''}`}
                    onClick={() => setColor('black')}
                  >
                    Black
                  </span>
                  <span
                    className={`swatch_white${color === 'white' ? ' active' : ''}`}
                    onClick={() => setColor('white')}
                  >
                    White
                  </span>
                </div>

                <div className="sex">
                  <select name="sex">
                    <option value="m">Men&apos;s</option>
                    <option value="w">Women&apos;s</option>
                  </select>
                </div>

                <div className="mob-wrap">
                  <div className="size">
                    <select
                      name="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      <option value="">Size</option>
                      <option value="s">Small</option>
                      <option value="m">Med</option>
                      <option value="l">Large</option>
                      <option value="xl">XL</option>
                      <option value="2x">2XL</option>
                      <option value="3x">3XL</option>
                    </select>
                  </div>
                  <a
                    href="#"
                    className={`btn buy${size ? ' active' : ''}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    buy
                  </a>
                </div>
              </div>
            </div>
        </section>
      </div>
    </>
  );
}
