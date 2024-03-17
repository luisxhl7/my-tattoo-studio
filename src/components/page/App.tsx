import { AppRouter } from "../../routers/AppRouter";
import { PageLayout } from "../template/page-layout/PageLayout";

function App() {
  return (
    <PageLayout>
      <AppRouter/>
    </PageLayout>
  );
}

export default App;
