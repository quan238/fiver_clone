import { RiStarSFill } from 'react-icons/ri'
import CardDescription from '../CardDescription'
import CardNavbar from '../CardNavbar/CardNavbar'
import CardSeller from '../CardSeller'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3',
  },
]

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}

const CardOverview = ({
  title,
  author,
  level,
  viewer,
  orders,
  navbar,
  image,
}) => {
  return (
    <>
      <CardNavbar navbar={navbar} />
      <div id="cartTitle">
        <h1 id="title">{title}</h1>
        <div id="cartRating" className="flex items-center">
          <h4>{author}</h4>
          <p>{level}</p>
          <div className="flex items-center">
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
          </div>
          <p>({viewer?.toString() || 0})</p>
          <p>{orders?.toString() || 0} Orders in Queue</p>
        </div>
      </div>
      <div id="cartMiddle">
        <Slide>
          {[image].map((slideImage, index) => (
            <div
              className="w-100"
              style={{
                ...divStyle,
                objectFit: 'cover',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${slideImage})`,
              }}
            ></div>
          ))}
        </Slide>

        {/* <div id="cartComparePackage">
          <h1>Compare Package</h1>
          <table>
            <thead>
              <tr>
                <td>Package</td>
                <td>
                  <div> ₹2,096 </div>
                  <h3>Basic</h3>
                  <b>SILKY FLOW</b>
                  <p>
                    3 LOGOS in JPG &amp; PNG (transparent) + NO Mascots &amp;
                    Complex design
                  </p>
                </td>
                <td>
                  <div> ₹5,867 </div>
                  <h3>Standard</h3>
                  <b> FLUID FLOW</b>
                  <p>
                    4 High Quality Creative designs + Logo Presentation + All
                    file Formats + Unlimited Revisions
                  </p>
                </td>
                <td>
                  <div>₹15,925</div>
                  <h3>Premium</h3>
                  <b>FLEXIBLE FLOW</b>
                  <p>
                    5 Ultra HQ concepts + UNLIMITED Revision + Stationery
                    Package + Social media kit + VIP support
                  </p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Logo transparency</td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>Vector file</td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>Printable file</td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>Source file</td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>Stationery designs</td>
                <td>
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>Social media kit</td>
                <td>
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td>
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
                <td className="cartFill">
                  <svg
                    width={11}
                    height={9}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>Number of concepts included</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td />
                <td>
                  <button className="class-green">Select</button>
                </td>
                <td>
                  <button className="class-green">Select</button>
                </td>
                <td>
                  <button className="class-green">Select</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  )
}

export default CardOverview
