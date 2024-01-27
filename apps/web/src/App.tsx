import { useState } from 'react';

import { isBlank, get } from '@jagcruz/package-common';

// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg';

import './App.css';

import reactLogo from './assets/react.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <hr />

      <div>
        <h2>
          Functions of <code>common</code> package
        </h2>

        <table>
          <thead>
            <tr>
              <th>Function Example</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <code>isBlank(undefined)</code>
              </td>
              <td>
                <code>{isBlank(undefined) ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(false)</code>
              </td>
              <td>
                <code>{isBlank(false) ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(true)</code>
              </td>
              <td>
                <code>{isBlank(true) ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(1)</code>
              </td>
              <td>
                <code>{isBlank(1) ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(&apos;&apos;)</code>
              </td>
              <td>
                <code>{isBlank('') ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(&apos;&nbsp;&apos;)</code>
              </td>
              <td>
                <code>{isBlank(' ') ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(&apos;a&apos;)</code>
              </td>
              <td>
                <code>{isBlank('a') ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank(&apos;&nbsp;a&nbsp;&apos;)</code>
              </td>
              <td>
                <code>{isBlank(' a ') ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>isBlank({'{}'})</code>
              </td>
              <td>
                <code>{isBlank({}) ? 'true' : 'false'}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>get({JSON.stringify({ foo: { bar: 'baz' } })}, &apos;foo&apos;)</code>
              </td>
              <td>
                <code>{JSON.stringify(get({ foo: { bar: 'baz' } }, 'foo'))}</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>get({JSON.stringify({ foo: { bar: 'baz' } })}, &apos;foo.bar&apos;)</code>
              </td>
              <td>
                <code>{JSON.stringify(get({ foo: { bar: 'baz' } }, 'foo.bar'))}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
