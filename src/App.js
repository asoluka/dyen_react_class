import { useState } from "react";
import { Button } from "./Button";
import { Flex } from "./Flex";
import { Input } from "./Input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" width="40%">
        <Input
          onChange={handleEmailChange}
          value={email}
          labelTxt="Email:"
          placeholder="Enter name"
          type="email"
        />
        <Input
          onChange={handlePasswordChange}
          labelTxt="Password:"
          placeholder="Enter password"
          type="password"
          value={password}
        />
        <Button
          onClick={() => {
            console.log(email, password);
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
