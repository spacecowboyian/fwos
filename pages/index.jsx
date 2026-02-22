import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SAMPLE_SHIRTS = [
  ['Forty', 'Words', 'On', 'Shirts'],
  ['Four', 'Words', 'On', 'Shirts'],
  ['Hunt', 'For', 'Blue', 'October'],
  ['Keep', 'It', 'Simple', 'Stupid'],
  ['No', 'Bad', 'Days', 'Ever'],
  ['Less', 'Is', 'More', 'Always'],
  ['Make', 'It', 'Count', 'Today'],
  ['Just', 'Do', 'It', 'Now'],
  ['Live', 'Love', 'Laugh', 'Lots'],
  ['Work', 'Hard', 'Play', 'Harder'],
  ['Stay', 'Gold', 'Pony', 'Boy'],
  ['One', 'More', 'Good', 'Day'],
];

export default function Home() {
  const router = useRouter();
  const [words, setWords] = useState(['', '', '', '']);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const smallText = words.some((w) => w.length > 7);
  const allFilled = words.every((w) => w.trim().length > 0);

  function handleStart(e) {
    e.preventDefault();
    setShowForm(true);
    setTimeout(() => inputRefs[0].current && inputRefs[0].current.focus(), 0);
  }

  function handleWordChange(idx, val) {
    const next = [...words];
    next[idx] = val;
    setWords(next);
  }

  function handleKeyDown(e, idx) {
    const { keyCode } = e;
    if (keyCode === 32 || keyCode === 13) {
      e.preventDefault();
      const nextRef = inputRefs[idx + 1];
      if (nextRef && nextRef.current) nextRef.current.focus();
    } else if (keyCode === 8 && words[idx].length === 0) {
      const prevRef = inputRefs[idx - 1];
      if (prevRef && prevRef.current) prevRef.current.focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const [w1, w2, w3, w4] = words;
    router.push(`/item?w1=${encodeURIComponent(w1)}&w2=${encodeURIComponent(w2)}&w3=${encodeURIComponent(w3)}&w4=${encodeURIComponent(w4)}`);
  }

  return (
    <>
      <Head>
        <title>Four Words On Shirts</title>
        <meta name="description" content="Put four words on a shirt." />
      </Head>

      <a
        href="#"
        onClick={(e) => { e.preventDefault(); setShowSignIn(true); }}
        className="btn-sign-in"
      >
        Sign In <i className="icon-tw-white"></i><i className="icon-fb-white"></i>
      </a>

      <section
        className="creator"
        style={{ backgroundImage: `url(${BASE_PATH}/images/shirt-blank-black.png)` }}
      >
        <div className={`shirt-form${smallText ? ' small-text' : ''}`}>
          {!showForm && (
            <a
              href="#"
              className="start"
              onClick={handleStart}
            >
              Start{' '}
            </a>
          )}
          <form onSubmit={handleSubmit}>
            {['Four', 'Words', 'On', 'Shirts'].map((placeholder, i) => (
              <input
                key={i}
                ref={inputRefs[i]}
                type="text"
                placeholder={placeholder}
                autoComplete="off"
                maxLength={10}
                value={words[i]}
                onChange={(e) => handleWordChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
            <button
              type="submit"
              className={allFilled ? '' : 'hide'}
            >
              Submit Your Four Words
            </button>
          </form>
        </div>
      </section>

      <div className="container">
        <section>
          <h2>The Best Shirt Ever</h2>
          <article className="shirts" id="row2">
            {SAMPLE_SHIRTS.slice(0, 6).map(([w1, w2, w3, w4], i) => (
              <div key={i}>
                <Link href={`/item?w1=${encodeURIComponent(w1)}&w2=${encodeURIComponent(w2)}&w3=${encodeURIComponent(w3)}&w4=${encodeURIComponent(w4)}`}>
                  <p>{w1}</p>
                  <p>{w2}</p>
                  <p>{w3}</p>
                  <p>{w4}</p>
                </Link>
              </div>
            ))}
          </article>
        </section>
        <section>
          <h2>So Fresh, So Clean</h2>
          <article className="shirts" id="row3">
            {SAMPLE_SHIRTS.slice(6).map(([w1, w2, w3, w4], i) => (
              <div key={i}>
                <Link href={`/item?w1=${encodeURIComponent(w1)}&w2=${encodeURIComponent(w2)}&w3=${encodeURIComponent(w3)}&w4=${encodeURIComponent(w4)}`}>
                  <p>{w1}</p>
                  <p>{w2}</p>
                  <p>{w3}</p>
                  <p>{w4}</p>
                </Link>
              </div>
            ))}
          </article>
        </section>
      </div>

      {showSignIn && (
        <section
          className="login-container modal"
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1004 }}
        >
          <a className="modal-close" href="#" onClick={(e) => { e.preventDefault(); setShowSignIn(false); }}>&times;</a>
          <h1>Four Words On Shirts</h1>
          <a href="#" className="btn-signin-twitter" onClick={(e) => e.preventDefault()}>
            <div className="icon"></div>
            <div className="text">Sign in with Twitter</div>
          </a>
          <a href="#" className="btn-signin-facebook" onClick={(e) => e.preventDefault()}>
            <div className="icon"></div>
            <div className="text">Sign in with Facebook</div>
          </a>
          <p className="quiet">
            Yes, these are your only options for now.<br />
            No, you may not complain.
          </p>
        </section>
      )}

      <footer>
        <div className="center">
          <section id="company">
            <a href="http://www.fourwordsonshirts.com">F.W.O.S.</a>
          </section>
          <section id="meta">
            <div>Copyright &copy; 2012 F.W.O.S. All rights reserved.</div>
            <div>
              <a href="http://www.facebook.com/fwoshirts">Facebook</a>
              &nbsp;|&nbsp;
              <a href="https://twitter.com/fwoshirts">Twitter</a>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
