import ChooseUsComponent from "./Components/ChooseUsContainer/ChooseUsComponent";
import FooterComponsnt from "./Components/FooterContainer/FooterComponent1";
import HeaderComponent from "./Components/HeaderContainer/HeaderComponent";
import HomeComponent from "./Components/HomeContainer/HomeComponent";
import PricingComponent from "./Components/PricingContainer/PricingComponent";
import ServicesComponent from "./Components/ServiceContainer/ServicesComponent";
import TestimonalComponent from "./Components/TestimonalContainer/TestimonalComponent";

function App() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl">
        <HeaderComponent />
        <div>
          <HomeComponent />
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl" id="services">
          <ServicesComponent />
        </div>
      </div>
      <div className="mx-auto" id="chooseUs">
        <ChooseUsComponent />
      </div>
      <div className="bg-white">
        <div className="mx-auto" id="testimonal">
          <TestimonalComponent />
        </div>
      </div>
      <div className="mx-auto max-w-7xl" id="pricing">
        <PricingComponent />
      </div>
      <div className="mx-auto max-w-7xl">
        <FooterComponsnt />
      </div>
    </div>
  );
}

export default App;
