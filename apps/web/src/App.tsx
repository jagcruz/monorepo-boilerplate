import { useState } from 'react';

import { isBlank, get } from '@jagcruz/package-common';

import LinkLogo from 'src/components/LinkLogo';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white/85 bg-[#242424] w-[100dvw] min-h-[100dvh] flex place-items-center">
      <div className="max-w-[1280px] my-0 mx-auto p-8 text-center">
        <div className="flex place-content-center">
          <LinkLogo src="vite" />
          <LinkLogo src="react" />
        </div>

        <h1 className="text-5xl font-bold text-current">Vite + React + Tailwind</h1>

        <div className="p-12">
          <button
            className="bg-[#1a1a1a] font-medium py-2 px-4 rounded-lg border border-transparent hover:border-[#646cff] transition-[border-color] duration-300"
            onClick={() => setCount(count => count + 1)}
          >
            count is {count}
          </button>
        </div>

        <p className="text-[#888] pb-3">Click on the Vite and React logos to learn more</p>

        <hr className="my-3" />

        <div className="flex flex-col pt-3">
          <h2 className="text-3xl font-bold text-current pb-3">
            Functions of <code>common</code> package
          </h2>

          <table className="bg-slate-950 overflow-hidden rounded-lg">
            <thead className="bg-slate-800">
              <tr>
                <th className="font-extrabold">Function Example</th>
                <th className="font-extrabold">Result</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="bg-slate-900/30">
                  <code>isBlank(undefined)</code>
                </td>
                <td className="bg-slate-900/70">
                  <code>{isBlank(undefined) ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>isBlank(false)</code>
                </td>
                <td className="bg-slate-900/95">
                  <code>{isBlank(false) ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td className="bg-slate-900/30">
                  <code>isBlank(true)</code>
                </td>
                <td className="bg-slate-900/70">
                  <code>{isBlank(true) ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>isBlank(1)</code>
                </td>
                <td className="bg-slate-900/95">
                  <code>{isBlank(1) ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td className="bg-slate-900/30">
                  <code>isBlank(&apos;&apos;)</code>
                </td>
                <td className="bg-slate-900/70">
                  <code>{isBlank('') ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>isBlank(&apos;&nbsp;&apos;)</code>
                </td>
                <td className="bg-slate-900/95">
                  <code>{isBlank(' ') ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td className="bg-slate-900/30">
                  <code>isBlank(&apos;a&apos;)</code>
                </td>
                <td className="bg-slate-900/70">
                  <code>{isBlank('a') ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>isBlank(&apos;&nbsp;a&nbsp;&apos;)</code>
                </td>
                <td className="bg-slate-900/95">
                  <code>{isBlank(' a ') ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td className="bg-slate-900/30">
                  <code>isBlank({'{}'})</code>
                </td>
                <td className="bg-slate-900/70">
                  <code>{isBlank({}) ? 'true' : 'false'}</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>get({JSON.stringify({ foo: { bar: 'baz' } })}, &apos;foo&apos;)</code>
                </td>
                <td className="bg-slate-900/95">
                  <code>{JSON.stringify(get({ foo: { bar: 'baz' } }, 'foo'))}</code>
                </td>
              </tr>

              <tr>
                <td className="bg-slate-900/30">
                  <code>get({JSON.stringify({ foo: { bar: 'baz' } })}, &apos;foo.bar&apos;)</code>
                </td>
                <td className="bg-slate-900/70">
                  <code>{JSON.stringify(get({ foo: { bar: 'baz' } }, 'foo.bar'))}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
