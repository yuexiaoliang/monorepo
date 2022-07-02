import './style.css';
import { log, msg } from '@shuguang/components';
log();

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>${msg}</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
