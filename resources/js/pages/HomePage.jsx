import React, { Component, Fragment } from 'react';
import HomeBanner from "../components/homeBanner";
import CourseFeature from "../components/courseFeature";
import CoursePlanHome from "../components/coursePlanHome";
import PaymentGuide from "../components/PaymentGuide";
import FreeClassHome from "../components/freeClassHome";
import MoreSeries from "../components/moreSeries";
import Footer from "../components/Footer";

class HomePage extends Component {
    render() {
        return (
        <Fragment>
             <HomeBanner/>
             <CourseFeature/>
             <CoursePlanHome/>
             <PaymentGuide/>
             <FreeClassHome/>
             <MoreSeries/>
              <Footer/>
        </Fragment>
        );
    }
}

export default HomePage;
