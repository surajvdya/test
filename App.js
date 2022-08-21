import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

import Questions from './pages/questions';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<Questions />} />
                </Routes>
            </Router>
            <Footer />

        </div>
    );
}

export default App;
