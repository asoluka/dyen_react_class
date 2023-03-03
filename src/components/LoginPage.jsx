import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div className="main flex flex-center flex-column">
        <section className="flex flex-start flex-column width-content">
          <h2>Login</h2>
          <input
            className="mb-5"
            type="email"
            placeholder="enter email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={handlePassword}
          />
        </section>
      </div>
    </div>
  );
}
