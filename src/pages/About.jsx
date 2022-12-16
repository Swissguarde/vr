import Seo from "../components/Seo";
import Dir from "../assets/dir.jpg";
const About = () => {
  return (
    <div>
      <Seo
        title="About Us | VR BRICKS"
        description="Our Mission and Vison"
        name="VR BRICKS"
        type="About"
      />
      <div className="p-6 md:p-8 bg-blue-700 text-white">
        <p className="text-center text-3xl md:text-5xl font-bold mt-32">
          ABOUT VR BRICKS
        </p>
        <div className="my-6  mx-auto  text-base sm:text-xl">
          <div className="flex flex-col gap-3">
            <div className="font-bold">
              How blockchain will revolutionise the way we buy homes
            </div>{" "}
            <div>
              While the internet has made spending money easier than ever,
              buyers still rate completing a property purchase as one of life’s
              most stressful experiences. But it doesn’t have to be. “I believe
              blockchain and smart contract technology has the capacity to
              significantly cut down the length of time it takes to buy and sell
              property whilst boosting the level of efficiency across the
              conveyancing process,” said Ruban Selvanayagam from Property
              Solvers. The technology to make the largest purchase of one’s life
              as painless as it can be is already in existence – it just isn’t
              in use. However, recent developments suggest this could be about
              to change.
            </div>
            <div>
              The UK has now completed its first blockchain trial, slashing the
              average property transaction process of three months to only three
              weeks. This month, Instant Property Network (IPN) completed a
              global trial of a new distributed ledger-based system. The trial,
              which was facilitated by blockchain software firm R3, ran
              end-to-end transactions using test data through a new distributed
              ledger to simulate property sales over a five-day period. The
              first transaction took less than an hour to complete. IPN
              estimates that if these efficiencies were applied to the global
              property market it could equate to an annual saving of
              approximately $160 billion. David E. Rutter, CEO of R3, said:
              “There has been plenty of talk about how distributed ledger
              technology could revolutionise the property industry, but little
              in the way of tangible results. This trial changes that. Not only
              has it shown that distributed applications work and the benefits
              are real and substantial, it has also shown that there is huge
              appetite in the market to evaluate it.” In other parts of the
              world, governments are pushing blockchain technology. Dubai, which
              built a city in less time than it took the UK to build a runway,
              could offer a glimpse of what’s to come. Chris Dietz, Executive
              Vice President of Global Operations for Leading Real Estate
              Companies of the World, said: “The Dubai Land Department – the
              Emirate’s property legislator – has recently unveiled plans for
              REST, or Real Estate Self Transaction, a digitalised platform
              based on blockchain ledger technology.
            </div>
            <div>
              The system will enable a complete digitalisation of real estate
              transactions by 2020, eliminating paper documents and reducing
              brokerage procedures.” While Dubai may be a world away from UK
              real estate, its example of early adoption is a good lesson for
              every market. “Although this specific initiative is unique to
              Dubai, the digitalisation of real estate transactions and
              resulting reduction in demand for ‘pure agency services’ will
              trickle down to other global markets,” said Dietz. “Agents must
              keep a close eye on how Dubai businesses are adapting their
              services and take note, making plans to evolve their business
              model with changing market conditions, rather than burying their
              head in the sand.” Selvanayagam explained that the UK is already
              waking up to the benefit of blockchain. “Although the Land
              Registry is somewhat lagging behind other countries in terms of
              rolling out similar technology, there has been a concerted effort
              to get the wheels in motion,” he said. “Although significant
              investment will be necessary, it’s hard to deny the huge benefits
              that incorporating blockchain into the conveyancing process will
              bring to the house sale process.” A number of solicitors have
              claimed that new build home conveyancing is more complex than any
              other type of conveyancing. However, blockchain technology could
              transform it into the simplest. “Few would deny that house
              conveyancing remains a bureaucratic haze,” said Selvanayagam.
              “With property title fraud also costing the Land Registry
              approximately £10 million per year in indemnifying homeowners, the
              need for reform is unquestionable.” Lisa Simon, Head of
              Residential Sales, Carter Jonas, added, “In order to make changes
              for the better, the industry must first evaluate the conveyancing
              process and the ways in which we can streamline what is broadly
              perceived as slow and laborious within the timeline of a house
              sale. “With buyers, bankers and solicitors all playing a part in
              the journey towards the purchase of a property, there runs a risk
              of ‘too many cooks’. There is a gap yet to be filled by the
              PropTech community in exploring how conveyancing can be optimised,
              which could in turn bolster the volume of transactions in the
              market.” According to new research by Strutt & Parker,
              verification is where intelligent document processing and
              blockchain technology could have a significant impact. “As every
              party in a transaction can trust the information, it has the
              potential to reduce time and costs,” Vanessa Hale, Director of
              Research Strutt & Parker said. “There are still hurdles to
              overcome with blockchain, especially when it comes to binding
              digital signatures, but HM Land Registry is consulting on rules to
              allow this type of innovation. And by using artificial
              intelligence and automation to process documents, the time
              required for compliance when buying a new home could become almost
              non-existent. “All of this ground-breaking technology is already
              available – so it will be fascinating to see how the property
              industry adapts around it over the next 10 years.” Teal Legal is
              one such company looking to make inroads. Backed by government
              funding through UK Research and Innovation, the ‘AI Conveyancer’
              will consume large chunks of conveyancing data to automate the due
              diligence element of the conveyancing process. Sally Holdway, CEO
              of Teal Legal said: “Whether the market actually wants ‘instant
              conveyancing’ is a moot point. We are firmly of the view that when
              a property sale completes should be in the hands of the parties to
              the transaction. However, they shouldn’t be waiting around for the
              legal work to be finalised, which is what happens in most cases
              today. We absolutely see a future where properties can be marketed
              as ‘conveyancing ready’ because tools like our AI Conveyancer have
              crunched the data to work out whether a property is ‘good and
              marketable’ well before a buyer is even found.” Blockchain is
              often hyped up to be as big as the internet; however, if
              housebuilders ask themselves how much the internet has changed the
              antiqued conveyancing process, they are right to be cynical about
              the impact blockchain could have. Nonetheless, believing just a
              fraction of the hype warrants profound questions about how
              blockchain will influence buyer behaviour in the near future.
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 max-w-md mx-auto py-20 flex flex-col sm:flex-row items-center justify-center gap-3">
        <img
          src={Dir}
          className="object-cover rounded-full border-y-2 border-blue-700 w-60 h-60"
          alt=""
        />
        <div className="text-xl">
          This project is created by HOUSE OF VR for Dr Mohammed Nasser Al
          Qahtani
        </div>
      </div>
    </div>
  );
};
export default About;
