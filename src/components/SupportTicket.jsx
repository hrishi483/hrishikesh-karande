import {React, useState} from 'react'
import SupportModal from './SupportModal';
const SupportTicket = () => {
    const [showSupport, setShowSupport] = useState(false);
  return (
    <div>
        <SupportModal show={showSupport} setShow={setShowSupport} />

        {/* Floating Support Button */}
        <a
            onClick={() => setShowSupport(true)}
            className="fixed bottom-26 z-50 right-6 bg-cyan-500 text-white w-14 h-14 rounded-full
                    flex items-center justify-center text-3xl shadow-xl cursor-pointer
                    hover:scale-110 transition-all duration-300"
        >
            <i className="bx bx-message-dots"></i>
        </a>

    </div>
  )
}

export default SupportTicket
