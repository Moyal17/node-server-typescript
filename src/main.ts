import app from './app';
import CONFIG from './config/config';
import swaggerDocs from './config/swagger';

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on port http://localhost:${CONFIG.PORT}`);
  swaggerDocs(app);
});
