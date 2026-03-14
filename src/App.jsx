// import { useState, useEffect } from "react"
// import { API } from "./api/clientApi.js"
// import Card from "./components/Card.jsx"
// function App() {

//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState({
//     type: "",
//     participants: ""
//   })


//   const handleChange = (e) => {
//     setFilter({
//       ...filter,
//       [e.target.name]: e.target.value
//     }
//     )
//   }





//   // const fetchRandomData = async () => {
//   //   try {
//   //     setLoading(true);
//   //     const response = await API.get("/random");
//   //     // console.log(response.data)
//   //     // console.log(response.data.activity)
//   //     setResult(response.data)
//   //     setLoading(false);
//   //   } catch (err) {
//   //     console.log("Err from fetchRandomData", err)
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchRandomData();
//   // }
//   //   , [])

//   // const handleRandom = async () => {
//   //   await fetchRandomData();
//   // }













//   const fetchFilteredData = async (e) => {
//     try {
//       setLoading(true);
//       const response = await API.get(`/filter?type=${filter.type}&participants=${filter.participants}`)
//       // e.preventDefault();
//       console.log(response)
//       if (response.data.length === 0) {
//         setResult("No activity found")
//       } else {
//         let random = Math.floor(Math.random() * response.data.length)
//         setResult(response.data[random])
//       }
//       setLoading(false);
//     } catch (err) {
//       console.log("Err from fetchFilteredData", err)
//       setLoading(false);

//     }
//   }

//   // useEffect(() => {
//   //   fetchFilteredData();
//   // }, []
//   // )



//   const handleFilter = async (e) => {
//     e.preventDefault();
//     await fetchFilteredData()
//   }



//   if (loading) {
//     return <p className=" text-3xl text-center">Loading...</p>
//   }





//   return (
//     <div className="min-h-screen flex flex-col bg-[url('/images/juyt_6.jpg')] bg-cover bg-center border border-black">

//       {/* Top Title */}
//       <h1 className="text-6xl text-center mt-10">
//         Bored ? Try this
//       </h1>

//       {/* Center Section */}
//       <div className="flex flex-col items-center justify-center flex-1 gap-3">

//         {/* Form Card */}
//         <div className="border border-black px-3 py-5 rounded-lg flex flex-col items-center justify-center gap-4 bg-teal-100 w-full max-w-2xl">

//           <form
//             action="/filter"
//             onSubmit={handleFilter}
//             className="flex gap-4"
//           >

//             <select
//               className="bg-orange-100 p-4 rounded-lg w-auto"
//               onChange={handleChange}
//               name="participants"
//               value={filter.participants}
//             >
//               <option value="">Select no. of participants</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//             </select>

//             <select
//               className="bg-orange-100 p-4 rounded-lg max-w-auto"
//               onChange={handleChange}
//               name="type"
//               value={filter.type}
//             >
//               <option value="">Select type of activity/Random</option>
//               <option value="relaxation">Relaxation</option>
//               <option value="education">Education</option>
//               <option value="charity">Charity</option>
//               <option value="busywork">Busywork</option>
//               <option value="recreational">Recreational</option>
//               <option value="social">Social</option>
//               <option value="cooking">Cooking</option>
//             </select>

//             <button
//               className="p-3 bg-blue-300 rounded-lg hover:bg-blue-500"
//               type="submit"
//             >
//               Submit
//             </button>

//           </form>
//         </div>

//         {/* Result Card */}
//         <div className="p-3 flex flex-col gap-3 bg-red-100 rounded-lg w-60 text-center">
//           {result === "" ? (
//             <p>Select options to get activity</p>
//           ) : (
//             <p className="bg-white rounded-lg p-1 text-xl">
//               {result.activity}
//             </p>
//           )}
//         </div>

//       </div>

//     </div>
//   )
// }

// export default App


import { useState, useEffect } from "react"
import { API } from "./api/clientApi.js"
import Card from "./components/Card.jsx"

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    participants: ""
  })

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
  }

  const fetchFilteredData = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/filter?type=${filter.type}&participants=${filter.participants}`)
      console.log(response)
      if (response.data.length === 0) {
        setResult("No activity found")
      } else {
        let random = Math.floor(Math.random() * response.data.length)
        setResult(response.data[random])
      }
      setLoading(false);
    } catch (err) {
      console.log("Err from fetchFilteredData", err)
      setLoading(false);
    }
  }

  const handleFilter = async (e) => {
    e.preventDefault();
    await fetchFilteredData()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/images/juyt_6.jpg')] bg-cover bg-center">
        <p className="text-2xl font-light tracking-[0.3em] text-slate-600 uppercase animate-pulse">
          Finding something for you...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[url('/images/juyt_6.jpg')] bg-cover bg-center">

      {/* Top Title */}
      <h1
        className="text-5xl text-center mt-14 mb-2 font-light tracking-tight text-slate-700"
        style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
      >
        Bored? <span className="font-semibold italic text-slate-500">Try this.</span>
      </h1>

      <p className="text-center text-sm tracking-widest uppercase text-slate-400 mb-10" style={{ fontFamily: "monospace" }}>
        — pick a vibe, get a nudge —
      </p>

      {/* Center Section */}
      <div className="flex flex-col items-center justify-center flex-1 gap-5">

        {/* Form Card */}
        <div
          className="px-8 py-7 rounded-2xl flex flex-col items-center justify-center gap-4 w-full max-w-2xl"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 8px 32px rgba(180, 160, 200, 0.18), 0 1.5px 0 rgba(255,255,255,0.8) inset",
          }}
        >
          <form
            action="/filter"
            onSubmit={handleFilter}
            className="flex gap-3 items-center"
          >
            <select
              className="p-3 rounded-xl text-sm text-slate-600 outline-none cursor-pointer transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-purple-200"
              style={{
                background: "rgba(255, 245, 230, 0.85)",
                border: "1px solid rgba(220, 190, 150, 0.4)",
                fontFamily: "monospace",
                letterSpacing: "0.03em",
                minWidth: "180px",
              }}
              onChange={handleChange}
              name="participants"
              value={filter.participants}
            >
              <option value="">No. of people</option>
              <option value="1">1 — Solo</option>
              <option value="2">2 — Duo</option>
              <option value="3">3 — Group</option>
            </select>

            <select
              className="p-3 rounded-xl text-sm text-slate-600 outline-none cursor-pointer transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-purple-200"
              style={{
                background: "rgba(255, 245, 230, 0.85)",
                border: "1px solid rgba(220, 190, 150, 0.4)",
                fontFamily: "monospace",
                letterSpacing: "0.03em",
                minWidth: "210px",
              }}
              onChange={handleChange}
              name="type"
              value={filter.type}
            >
              <option value="">Type of activity</option>
              <option value="relaxation">Relaxation</option>
              <option value="education">Education</option>
              <option value="charity">Charity</option>
              <option value="busywork">Busywork</option>
              <option value="recreational">Recreational</option>
              <option value="social">Social</option>
              <option value="cooking">Cooking</option>
            </select>

            <button
              className="px-6 py-3 rounded-xl text-sm font-medium tracking-wide text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #818cf8)",
                boxShadow: "0 4px 14px rgba(139, 92, 246, 0.35)",
                fontFamily: "monospace",
                letterSpacing: "0.08em",
              }}
              type="submit"
            >
              GO →
            </button>
          </form>
        </div>

        {/* Result Card */}
        <div
          className="px-7 py-5 rounded-2xl w-72 text-center transition-all duration-300"
          style={{
            background: result
              ? "rgba(255,255,255,0.55)"
              : "rgba(255,220,220,0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: result
              ? "1px solid rgba(255,255,255,0.7)"
              : "1px dashed rgba(220, 160, 160, 0.5)",
            boxShadow: result
              ? "0 6px 24px rgba(160, 140, 200, 0.15)"
              : "none",
          }}
        >
          {result === "" ? (
            <p
              className="text-sm text-slate-400 tracking-widest uppercase"
              style={{ fontFamily: "monospace" }}
            >
              awaiting your choice...
            </p>
          ) : (
            <p
              className="text-lg text-slate-700 font-medium leading-snug"
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
            >
              {typeof result === "string" ? result : result.activity}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

export default App


// Good catch. 429 means the external API is rate-limiting you. Here's how to handle it properly:
// const fetchFilteredData = async () => {
//   try {
//     setLoading(true);
//     setError(""); // clear previous errors
//     const response = await API.get(`/filter?type=${filter.type}&participants=${filter.participants}`)
    
//     if (response.data.length === 0) {
//       setResult("No activity found")
//     } else {
//       let random = Math.floor(Math.random() * response.data.length)
//       setResult(response.data[random])
//     }
//   } catch (err) {
//     if (err.response?.status === 429) {
//       setError("too_many_requests");
//     } else {
//       setError("generic");
//     }
//     console.log("Err from fetchFilteredData", err)
//   } finally {
//     setLoading(false);
//   }
// }
// Add error state at the top:
// const [error, setError] = useState("");
// And in your JSX, add this block between the form card and result card:
// {error === "too_many_requests" && (
//   <div
//     className="px-7 py-5 rounded-2xl w-72 text-center"
//     style={{
//       background: "rgba(255, 200, 180, 0.45)",
//       backdropFilter: "blur(10px)",
//       WebkitBackdropFilter: "blur(10px)",
//       border: "1px dashed rgba(220, 100, 80, 0.5)",
//     }}
//   >
//     <p className="text-2xl mb-1">⏳</p>
//     <p
//       className="text-sm font-semibold text-red-500 tracking-widest uppercase"
//       style={{ fontFamily: "monospace" }}
//     >
//       Slow down
//     </p>
//     <p
//       className="text-xs text-slate-500 mt-1"
//       style={{ fontFamily: "monospace" }}
//     >
//       Too many requests. Wait a moment and try again.
//     </p>
//   </div>
// )}

// {error === "generic" && (
//   <div
//     className="px-7 py-5 rounded-2xl w-72 text-center"
//     style={{
//       background: "rgba(200, 200, 255, 0.35)",
//       backdropFilter: "blur(10px)",
//       WebkitBackdropFilter: "blur(10px)",
//       border: "1px dashed rgba(120, 120, 220, 0.5)",
//     }}
//   >
//     <p className="text-2xl mb-1">⚠️</p>
//     <p
//       className="text-sm font-semibold text-slate-600 tracking-widest uppercase"
//       style={{ fontFamily: "monospace" }}
//     >
//       Something went wrong
//     </p>
//     <p
//       className="text-xs text-slate-400 mt-1"
//       style={{ fontFamily: "monospace" }}
//     >
//       Couldn't fetch an activity. Try again.
//     </p>
//   </div>
// )}
// Three things worth noting:
// err.response?.status === 429 — this is axios's way of exposing the HTTP status. If you're using fetch instead of axios, it'd be err.status === 429 or you check response.ok before parsing.
// finally block replaces the duplicate setLoading(false) calls you had in both try and catch — cleaner.
// Clear error at the start of each new request (setError("")) so a stale error doesn't persist across retries.