import { Box, Button, Checkbox, Divider, FormControlLabel, Link, SvgIcon, TextField, Typography } from "@mui/material"
import { green } from "@mui/material/colors"
import shadows from "@mui/material/styles/shadows"
SvgIcon

function App() {

  return (
    <>
      <Box
        sx={{
          bgcolor: green[50],
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
        <Box sx={{ bgcolor: "white", width: "40%", height: "95%", boxShadow: shadows, borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <SvgIcon sx={{ height: 80, width: 80 }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M39.6192 31.6457C39.6192 32.309 39.5637 33.4145 38.8985 34.133C38.1779 34.7963 37.0693 34.8516 36.4041 34.8516H29.3087C27.2576 34.8516 26.0381 34.8516 25.2066 34.9621C24.7632 35.0174 24.2088 35.2385 23.9317 35.349C23.8208 35.4043 23.8208 35.349 23.8763 35.2937L40.0626 18.8775C40.1181 18.8222 40.1735 18.8222 40.1181 18.9327C40.0072 19.2091 39.7855 19.7618 39.73 20.204C39.6192 21.0331 39.6192 22.2491 39.6192 24.2943V31.6457ZM54.6969 81.2815C52.8122 80.0655 51.8144 78.4626 51.4264 77.4676C51.0383 76.528 50.8166 75.4778 50.8166 74.4276C50.8166 69.8398 54.5861 66.0812 59.2424 66.0812C60.6282 66.0812 61.7369 67.1867 61.7369 68.5685C61.7369 69.5082 61.238 70.282 60.4619 70.7242C60.1848 70.89 59.7967 71.0006 59.5196 71.0559C59.2424 71.1111 58.1892 71.2217 57.6903 71.6639C57.136 72.1061 56.6925 72.8246 56.6925 73.5985C56.6925 74.4276 57.0251 75.2014 57.5794 75.7541C58.5772 76.7491 59.9076 77.3018 61.3489 77.3018C65.1183 77.3018 68.1671 74.2617 68.1671 70.5031C68.1671 67.1314 65.8943 64.1466 62.901 62.8201C62.4575 62.599 61.7369 62.4332 61.0717 62.2673C60.2402 62.1015 59.4641 61.991 59.4087 61.991C57.0805 61.7146 51.2601 59.8906 50.872 54.7501C50.872 54.7501 49.1536 62.4884 45.7168 64.5888C45.3842 64.7547 44.9407 64.9205 44.4418 65.031C43.9429 65.1416 43.3886 65.1968 43.2223 65.1968C37.6236 65.5285 31.6923 63.7597 27.5902 59.5589C27.5902 59.5589 24.8186 57.2927 23.3773 50.9362C23.0447 49.3886 22.3795 46.6249 21.9915 44.027C21.8252 43.0874 21.7698 42.3688 21.7144 41.7055C21.7144 38.9971 23.3773 37.1731 25.4838 36.8967C25.5392 36.8967 25.7055 36.8967 25.8164 36.8967C27.0914 36.8967 36.7921 36.8967 36.7921 36.8967C38.7323 36.8967 39.8409 36.3992 40.5615 35.7359C41.5039 34.8516 41.7256 33.5803 41.7256 32.0879C41.7256 32.0879 41.7256 22.0281 41.7256 20.7568C41.7256 20.7015 41.7256 20.4804 41.7256 20.4251C42.0028 18.38 43.8321 16.6665 46.5483 16.6665C46.5483 16.6665 47.3798 16.6665 47.8787 16.6665C48.433 16.6665 49.0982 16.7218 49.708 16.777C50.1514 16.8323 50.5395 16.9429 51.2047 17.1087C54.5861 17.9378 55.3067 21.3648 55.3067 21.3648C55.3067 21.3648 61.6815 22.4702 64.8966 23.023C67.9454 23.5757 75.4842 24.0732 76.9255 31.6457C80.3069 49.6649 78.2559 67.1314 78.0896 67.1314C75.706 84.1557 61.5152 83.3266 61.5152 83.3266C58.4663 83.3266 56.1936 82.3317 54.6969 81.2815ZM67.4465 45.0772C65.6172 44.9114 64.0651 45.6299 63.5108 47.0118C63.3999 47.2882 63.289 47.6198 63.3444 47.7856C63.3999 47.9514 63.5107 48.0067 63.6216 48.062C64.2868 48.3936 65.3955 48.5595 67.003 48.7253C68.6106 48.8911 69.7192 49.0016 70.4399 48.8911C70.5507 48.8911 70.6616 48.8358 70.7724 48.67C70.8833 48.5042 70.8279 48.1725 70.8279 47.8962C70.6061 46.3485 69.2758 45.2983 67.4465 45.0772Z" fill="#00A82D"></path>
            </svg>
          </SvgIcon>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "5px" }}>
            <Typography variant="h4" fontWeight={"bold"}>EverNote</Typography>
            <Typography variant="body1" >Remember everything important.</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "35px", width: "100%" }} >
            <Button variant="outlined" color="inherit" sx={{ textTransform: "none", color: "GrayText", borderColor: "gray", width: "60%" }} startIcon={<SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
            </SvgIcon>}>Continue with Google</Button>
            <Button variant="outlined" color="inherit" sx={{ textTransform: "none", color: "GrayText", borderColor: "gray", width: "60%" }} startIcon={<SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
            </SvgIcon>}>Continue with Apple</Button>
          </Box>
          <Divider sx={{ width: "60%", marginY: "20px", color: "GrayText" }} textAlign="center" variant="fullWidth">or</Divider>

          <form style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: green[100],
                    borderWidth: "3px",
                    borderRadius: "5px"
                  },
                },
              }}
              size="small"
              color="success"
              label="Email address or username"
              variant="outlined"
              name="email"
              type="email"
              fullWidth
            />
            <Button sx={{
              textTransform: "none",
              bgcolor: "#00A82D", ":hover": {
                bgcolor: green[800]
              }
            }} type="submit" variant="contained" >
              Continue
            </Button>
          </form>
          <FormControlLabel sx={{ marginY: "20px" }} label={<Typography textAlign={"center"} color={"GrayText"} variant="caption">Remember me for 30 days</Typography>} control={
            <Checkbox color="default"
              inputProps={{ 'aria-label': 'controlled' }}
            />

          } />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", marginTop: "10px" }}>
            <Typography color={"GrayText"} variant="body2">Don't have an Account ?</Typography>
            <Link underline="none" color={"#00A82D"} fontWeight={600} variant="body1">Create account</Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App