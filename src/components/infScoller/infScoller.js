import Image from "next/image";

// [ ] loop over blogs' images and make inf scroller with that
const InfScoller = () => (
  <div className="py-6 inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start">
      <li>
        <Image
          src="https://images.pexels.com/photos/19814587/pexels-photo-19814587/free-photo-of-poor-soul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/19596239/pexels-photo-19596239/free-photo-of-alpha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/12510798/pexels-photo-12510798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://avatars.githubusercontent.com/u/92796091?v=4"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/17645982/pexels-photo-17645982/free-photo-of-woman-posing-in-decorated-blue-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
    </ul>
    <ul
      className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
      aria-hidden="true"
    >
      <li>
        <Image
          src="https://images.pexels.com/photos/19814587/pexels-photo-19814587/free-photo-of-poor-soul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/19596239/pexels-photo-19596239/free-photo-of-alpha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/12510798/pexels-photo-12510798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://avatars.githubusercontent.com/u/92796091?v=4"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/17645982/pexels-photo-17645982/free-photo-of-woman-posing-in-decorated-blue-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
    </ul>
    <ul
      className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
      aria-hidden="true"
    >
      <li>
        <Image
          src="https://images.pexels.com/photos/19814587/pexels-photo-19814587/free-photo-of-poor-soul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/19596239/pexels-photo-19596239/free-photo-of-alpha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/12510798/pexels-photo-12510798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://avatars.githubusercontent.com/u/92796091?v=4"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
      <li>
        <Image
          src="https://images.pexels.com/photos/17645982/pexels-photo-17645982/free-photo-of-woman-posing-in-decorated-blue-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={100}
          height={50}
          style={{ objectFit: "cover", width: "auto" }}
          alt="scrollers' image"
        />
      </li>
    </ul>
  </div>
);
export default InfScoller;
