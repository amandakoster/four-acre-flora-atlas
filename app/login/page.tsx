// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       alert(error.message);
//       return;
//     }

//     window.location.href = "/";
//   };

//   return (
//     <div className="max-w-md mx-auto mt-12">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>

//       <input
//         className="border p-2 w-full mb-2"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         className="border p-2 w-full mb-4"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={login} className="border px-4 py-2">
//         Login
//       </button>
//     </div>
//   );
// }

export default function LoginPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Login Coming Soon</h1>
    </main>
  );
}
