import app from './app';
import CONFIG from './config/config';

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on port http://localhost:${CONFIG.PORT}`);
});
