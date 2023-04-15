import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import {
  DestinyLogo,
  Facebook,
  Google,
  Twitter,
  Apple,
} from "../../components/icons";
const Login = () => {
  const [sizeSocial, setSizeSocial] = useState<number>(32);
  return (
    <div className="w-1440 h-900 bg-lime-200">
      <Stack direction="row" spacing={2}>
        <div className="rounded-r-3xl border-black bg-slate-300">
          <DestinyLogo initialSize={400}></DestinyLogo>
        </div>
        <div className="">
          <h1>SIGN IN</h1>
          <span>
            <p>If you don’t have an account register</p>
            <p>
              You can
              <a> Register here !</a>
            </p>
          </span>
          <Stack direction="column" spacing={2}>
            <TextField label="Username" variant="standard" />
            <TextField label="Password" variant="standard" />
          </Stack>
          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <a>Forgot password?</a>
          </div>
          <button>Login</button>
          <p>Or</p>
          <div>
            <IconButton aria-label="facebook">
              <Facebook initialSize={sizeSocial} />
            </IconButton>
            <IconButton aria-label="google">
              <Google initialSize={sizeSocial} />
            </IconButton>
            <IconButton aria-label="twitter">
              <Twitter initialSize={sizeSocial} />
            </IconButton>
            <IconButton aria-label="apple">
              <Apple initialSize={sizeSocial} />
            </IconButton>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Login;
