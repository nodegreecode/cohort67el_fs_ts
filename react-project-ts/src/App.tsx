import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import Home from "pages/EmployeeApp/Home/Home.tsx";
import About from "pages/EmployeeApp/About/About.tsx";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs.tsx";
import LogIn from "pages/EmployeeApp/LogIn/LogIn.tsx";

//import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
//import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
//import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
//import Lesson_10 from "lessons/Lesson_10/Lesson_10.tsx";
//import Lesson_11 from "./lessons/Lesson_11/Lesson_11.tsx";
//import Lesson_12 from "./lessons/Lesson_12/Lesson_12.tsx";
//import Lesson_13 from "./lessons/Lesson_13/Lesson_13.tsx";
//import Homework_06 from "./homeworks/Homework_06/Homework_06.tsx";
//import Homework_07 from "./homeworks/Homework_07/Homework_07.tsx";
//import Homework_08 from "./homeworks/Homework_08/Homework_08.tsx";
//import Homework_09 from "./homeworks/Homework_09/Homework_09.tsx";
//import Homework_10 from "./homeworks/Homework_10/Homework_10.tsx";
//import Homework_12 from "./homeworks/Homework_12/Homework_12.tsx";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/login" element={<LogIn/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element="Page Not Found"/>
        </Routes>
      </Layout>
      {/*LESSONS*/}
      {/*<Lesson_06 />*/}
      {/* <Lesson_07 />*/}
      {/*<Lesson_08 />*/}
      {/*<Lesson_10 />*/}
      {/*<Lesson_11 />*/}
      {/*<Lesson_12/>*/}
      {/*<Lesson_13 />*/}

      {/*HOMEWORKS*/}
      {/* <Homework_06 />*/}
      {/* <Homework_07 />*/}
      {/* <Homework_08 />*/}
      {/*<Homework_09 />*/}
      {/* <Homework_10 />*/}
      {/*<Homework_12 />*/}
    </BrowserRouter>
  );
}

export default App;
