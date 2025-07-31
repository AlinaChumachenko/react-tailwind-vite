import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

import {
  ArrowDownTrayIcon,
  ArrowTrendingUpIcon,
  FolderArrowDownIcon,
  LinkIcon,
  PaintBrushIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'
import ButtonIconWithTooltip from '../components/ButtonIconWithTooltip'

function Home() {
  const [input, setInput] = useState('https://example.com')
  const [animateQR, setAnimateQR] = useState(false)

  const handleGenerateQR = () => {
    setAnimateQR(true) // спочатку вимикаємо
    setTimeout(() => {
      setAnimateQR(false) // через мить вмикаємо
    }, 400) // час у мс
  }
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="container flex flex-col gap-y-3 items-center">
        <h1 className="text-4xl text-center font-bold text-white text-outline">
          QR Code Generator
        </h1>
        <div className="bg-gray-100 p-10 rounded-lg shadow-md max-w-xl flex flex-col gap-y-3">
          <p>Enter your data to generate a QR code.</p>
          <input
            type="text"
            placeholder="https://example.com"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded-lg border-slate-300 hover:border-amber-600 focus:border-amber-600 focus:outline-none"
          />
          <div className="flex justify-between flex-col gap-2 sm:flex-row">
            <div className="flex flex-col gap-y-3">
              <button
                className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg h-10"
                onClick={handleGenerateQR}
              >
                Generate QR Code
              </button>
              <div className="flex flex-row gap-1">
                {/* DOWNLOAD */}
                <ButtonIconWithTooltip icon={ArrowDownTrayIcon} tooltip="Download" />

                {/* STYLE */}
                <ButtonIconWithTooltip icon={PaintBrushIcon} tooltip="Stylize" />

                {/* ADD LOGO */}
                <ButtonIconWithTooltip icon={PhotoIcon} tooltip="Add logo" />

                {/* SCAN STATISTICS */}
                <ButtonIconWithTooltip icon={ArrowTrendingUpIcon} tooltip="Scan statistics" />

                {/* SAVE TO PROFILE */}
                <ButtonIconWithTooltip icon={FolderArrowDownIcon} tooltip="Save to profile" />

                {/* CHANGE LINK */}
                <ButtonIconWithTooltip icon={LinkIcon} tooltip="Change link" />
              </div>
            </div>

            <div
              className={`bg-white p-4 rounded-lg border border-slate-300 flex justify-center transform transition-transform duration-500 ${
                animateQR ? 'rotate-180 scale-0' : ''
              }`}
            >
              <QRCodeCanvas value={input} size={128} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
