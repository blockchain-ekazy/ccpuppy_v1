import React from "react";
import "./Home.css";
import Img4 from "../Images/Roadmap.png";
import Img5 from "../Images/icon1.png";
import Img6 from "../Images/icon2.png";
import Img7 from "../Images/icon3.png";
import Img8 from "../Images/icon4.png";
import Img9 from "../Images/icon5.png";
import { Link } from "react-router-dom";
import paws from "../Images/paws1.png";
import paws2 from "../Images/paws2.png";
import paws3 from "../Images/paws3.png";
import paws4 from "../Images/paws4.png";

export default function Roadmap() {
  return (
    <div className="bg">
      <div className="heading text-center pt-5 pb-5">
        <label className="heading">ROADMAP</label>
      </div>
      <div className="container roadmap">
        <div className="row">
          <div className="col-4 col-sm-2">
            <img className="w-100" src={Img5} />
          </div>
          <div className="col-12 col-sm-10">
            <h5 class="title">Who let the dogs out?</h5>
            <p class="description">
              Drum roll please...
              <br />
              <ul className="pl-3">
                <li>Our first litter of 500 little puppies are born.</li>
                <li>
                  The first 100 pups are FREE and will be released from the
                  kennel on [DATE]
                </li>
                <li>
                  If this is the first time you have ever minted an NFT then
                  watch our{" "}
                  <Link to="/Mintapuppy">
                    <span className="style">HOW TO MINT</span>
                  </Link>{" "}
                  video guide created by Mark Timmis, CEO of Curious Cryptos
                  Ltd, and he’ll walk you through the whole process.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1 col-sm-2"></div>
          <div className="col-8 col-sm-4">
            <img src={paws} className="w-100" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-5"></div>
          <div className="col-4 col-sm-2 ml-auto">
            <img className="w-100" src={Img6} />
          </div>
          <div className="col-12 col-sm-5 mt-5 mt-md-0 text-right text-sm-left">
            <h5 class="title">How much is that doggy in the window?</h5>
            <p class="description text-right text-sm-left">
              <ul className="pl-3">
                <li>
                  As soon as the first 100 free pups have been homed, we will
                  release the other litters in packs of 100.{" "}
                </li>
                <li>
                  Follow us on Twitter to know when the release dates are coming
                  up.
                </li>
                <li>101 – 200 = £</li>
                <li> 201 – 300 = ££</li>
                <li>301 – 400 = £££</li>
                <li>401 – 500 = ££££</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 col-sm-5"></div>
          <div className="col-8 col-sm-4">
            <img src={paws2} className="w-100" />
          </div>
          <div className="col-1 col-sm-3"></div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-12 col-sm-"></div>
          <div className="col-4 col-sm-2 mr-auto">
            <img className="w-100" src={Img7} />
          </div>
          <div className="col-12 col-sm-4 mt-5 mt-md-0 text-sm-right">
            <h5 class="title">Nature Nurture</h5>
            <p class="description">
              <ul className="pl-3">
                <li>
                  At time of minting you can decide whether your puppy remains
                  forever a pup or grows up with changing traits and
                  characteristics.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1 col-sm-4"></div>
          <div className="col-8 col-sm-4">
            <img src={paws3} className="w-100" />
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-sm-6"></div>
          <div className="col-4 col-sm-2">
            <img className="w-100" src={Img8} />
          </div>
          <div className="col-12 col-sm-4 text-right text-sm-left">
            <h5 class="title">Good dog!</h5>
            <p class="description">
              <ul className="pl-3">
                <li>
                  If you choose to nurture and train your pup you must engage
                  with the puppy training school where you will receive for the
                  right nutrition and to learn how to get your pup to sit, beg,
                  fetch, etc.
                </li>
                <li>
                  As your puppy gets older, your NFT itself changes and you will
                  be send an updated NFT
                </li>
                <li>
                  {" "}
                  You may even decide to train your pup for Guide Dogs for the
                  Blind. If you choose this option you will receive a free pup.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-4"></div>
          <div className="col-8 col-sm-4 mx-auto">
            <img src={paws4} className="w-100" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-4 col-sm-2 mx-auto">
            <img className="w-100" src={Img9} />
          </div>
          <div className="col-12"></div>
          <div className="col-12 col-sm-5 text-center mx-auto mt-4">
            <h5 class="title">Release the hounds!</h5>
            <p class="description">
              Once your pup is fully grown and can behave themselves, they are
              released into the doggy metaverse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
