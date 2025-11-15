import React from "react";

const SupportModal = ({ show, setShow }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const type = e.target.type.value;
    const details = encodeURIComponent(e.target.details.value);

    const url = `https://github.com/hrishi483/client-issues/issues/new?title=${type}+from+${name}&body=${details}`;

    window.open(url, "_blank"); 
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
      <div className="bg-gray-900 w-96 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Raise a Support Ticket</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" placeholder="Your Name" className="border p-2 rounded" required />
          
          <select name="type" className="border p-2 rounded" required>
            <option value="BUG">Bug Report</option>
            <option value="FEATURE">Feature Request</option>
            <option value="SUPPORT">General Support</option>
          </select>

          <textarea 
            name="details" 
            placeholder="Describe your issue..." 
            className="border p-2 rounded h-32" 
            required
          />

          <button className="bg-orange-400 text-white py-2 rounded-xl hover:bg-orange-600">
            Submit Ticket
          </button>

          <button 
            type="button" 
            onClick={() => setShow(false)}
            className="bg-orange-700 hover:bg-organge-900 rounded-xl py-2 text-sm mt-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportModal;
