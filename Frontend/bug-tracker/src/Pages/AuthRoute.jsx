import React, { useState } from "react";

const AuthRoute=()=>{

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login functionality here
  };

  const handleSignup = () => {
    // Handle signup functionality here
  };

  const handleGoogleLogin = () => {
    // Handle Google login functionality here
  };

  const handleAvatarUpload = (event) => {
    // Handle avatar upload functionality here
  };

  return (
    <div>
      <h1>Welcome to Auth</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        {/* Include fields for signup */}
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <h2>Avatar Upload</h2>
      <input type="file" accept="image/*" onChange={handleAvatarUpload} />
    </div>
  );
}

export default AuthRoute;   