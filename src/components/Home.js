import { 
    Landing, 
    Skills,  
    Packages, 
    Footer, 
    Articles,
    Better,
    Mobile,
    Therapist,
} 
from "./";
export function Home() {
    return (
        <div>
            <Landing />
            <Skills />
            <Therapist />
            <Mobile />
            {/* <Consultation /> */}
            <Packages />
            <Articles />
            <Better />
            <Footer />
        </div>
    );
}