import Body from "@/components/Body/body";
import ContainerWite from "@/components/ContainerWhite/ContainerWhite";
import Footer from "@/components/Footer/footer";
import NavBar from "@/components/Header/navBar";
import SectionInfo from "@/components/Section/Section";
import MemberList from "@/components/MemberList/memberList";
import { member } from "@/data/member";
import PartenaireRight from "@/components/Partenaire/partenaire";
import Member from "@/components/MemberList/Member";
import BlackContainer from "@/components/BlackContainer/blackContainer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Body />
      <SectionInfo
        grandTitre={"Why"} 
        petitTitre={"Luminaria ?"} 
        paragraphe={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."} 
        Component={<ContainerWite/>} 
       />
      <SectionInfo 
        grandTitre={"Our"} 
        petitTitre={"Volunteer"} 
        paragraphe={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."} 
        Component={<ContainerWite><MemberList members={member}/></ContainerWite>} 
      />
      <SectionInfo 
        grandTitre={"Our"} 
        petitTitre={"Partners"} 
        paragraphe={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."} 
        Component={<PartenaireRight component1={<Member member={member[10]} />} component2={<Member member={member[11]}/>} component3={<Member member={member[9]} />}/>} 
      />
      <BlackContainer />
      
      <Footer />
    </>
  )
}
