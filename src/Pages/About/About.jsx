import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div
      className="text-center lg:text-start my-24 px-5 md:px-[120px] text-2xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      // style={{ fontWeight: "700", letterSpacing: "15px" }}
    >
      <h1 className="text-center text-[48px] mb-24">About us</h1>
      <p className="">
        Welcome to our innovative social media management platform! We
        understand the daily challenges of managing multiple social media
        accounts and the importance of having a strong online presence. That's
        why we've developed a solution that helps you effortlessly manage all
        your accounts in one place.
      </p>
      <p className="mt-5">
        Our application is designed to make social media management a breeze.
        With a user-friendly interface and powerful features, you can easily
        schedule posts, track performance, analyze your social media presence,
        and much more. Whether you're a small business looking to increase your
        online visibility, a creative professional seeking to showcase your
        work, or an individual looking to boost your personal brand, our
        application has everything you need.
      </p>
      <p className="mt-5">
        We are a dedicated team of experts with a passion for innovation and a
        commitment to providing the best possible service and support. Our team
        includes experienced developers, social media specialists, and customer
        support representatives who are always available to help. We believe
        that social media management should be simple and accessible to
        everyone, and we work tirelessly to ensure that our platform remains at
        the forefront of technology and innovation.
      </p>
      <p className="mt-5">
        At our core, we are driven by a desire to make a positive impact and to
        help our users succeed. We are always listening to your feedback and
        suggestions, and we work hard to incorporate your ideas into our
        platform. Our mission is to make social media management easy,
        efficient, and accessible to everyone, and we are committed to achieving
        this goal.
      </p>
      <p className="mt-5">
        So why wait?{" "}
        <span className="text-[#2B5C5F]">
          <Link to="/sign-up">Sign up</Link>
        </span>{" "}
        today and join the thousands of satisfied users who have already
        transformed the way they manage their social media presence. We look
        forward to helping you achieve your online goals and to providing you
        with the best possible service and support. Thank you for choosing us!
      </p>
    </div>
  );
};

export default About;
