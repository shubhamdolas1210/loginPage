import "./App.css";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Box component="form" noValidate autoComplete="off">
        <div className="container">
          <div className="container-padding">
            <h3 className="title">Welcome Back</h3>
            <p className="sub-heading">
              To keep connected with us, please login with your Email and
              Password
            </p>
            <div className="input_card">
              <TextField
                className="input"
                id="outlined-basic"
                label="UserName/Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                className="input"
                id="outlined-password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
            </div>
            <div className="line">
              <div className="line-divider">
                <p className="para">or login with</p>
                <div className="icon">
                  <div className="google-icon">
                    <img
                      className="social-icon"
                      src="assets/google icon.png"
                      alt="google-icon"
                    />
                  </div>
                  <div className="meta-icon">
                    <img
                      className="social-icon"
                      src="assets/meta icon.png"
                      alt="meta-icon"
                    />
                  </div>
                  <div className="apple-icon">
                    <img
                      className="social-icon"
                      src="assets/apple icon.png"
                      alt="apple-icon"
                    />
                  </div>
                </div>
                <div className="btn-login">
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily:
                        'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                      textTransform: "none",
                      fontSize: "16px",
                      backgroundColor: "#000",
                      width: "100%",
                    }}
                  >
                    login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default App;
