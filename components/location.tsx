import { MapPin, Clock, Calendar } from "lucide-react";

const Location = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-12 relative">
      <h2 className="my-6 font-american_Purpose text-5xl md:text-7xl max-sm:text-4xl">
        Our Location
      </h2>
      <div className="container flex flex-col md:flex-row gap-8 justify-center items-center p-6">
        {/* Location Card */}
        <div className="w-full md:w-1/3 p-6 bg-gray-50  rounded-lg shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg">Venue</h3>
                <p className="text-gray-600">
                  Travancore Hall Technopark ,
                  <br />
                  Kazhakkoottam
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg">Date</h3>
                <p className="text-gray-600">Thursday, November 21, 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg">Time</h3>
                <p className="text-gray-600">09:00 AM - 21st Monday 06:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <iframe
          className="w-full md:w-2/3 h-[50vh] rounded-lg shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2373669008086!2d76.87909067423288!3d8.558505399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnMzAuNiJOIDc2wrA1Mic1Mi42IkU!5e0!3m2!1sen!2sin!4v1647001234567!5m2!1sen!2sin"
          title="Event Location Map"
          aria-label="Google Maps showing event location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <svg
        width="218"
        height="449"
        viewBox="0 0 218 449"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 -z-10 max-sm:hidden"
      >
        <path
          d="M446.2 258.203C464.648 135.928 380.478 21.8494 258.203 3.40196C135.928 -15.0455 21.8495 69.1236 3.40209 191.399C-15.0454 313.674 69.1237 427.752 191.399 446.2C313.674 464.647 427.753 380.478 446.2 258.203ZM72.2727 201.789C84.9817 117.55 163.574 59.5635 247.813 72.2725C332.052 84.9815 390.038 163.574 377.329 247.813C364.62 332.052 286.028 390.038 201.789 377.329C117.55 364.62 59.5636 286.028 72.2727 201.789Z"
          fill="url(#paint0_linear_73_5825)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_73_5825"
            x1="101.137"
            y1="-2.11972"
            x2="118.453"
            y2="517.438"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0104101" stopColor="#5F5D5C" />
            <stop offset="0.894552" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Location;
