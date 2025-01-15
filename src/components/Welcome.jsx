// Main_Dashboard.js
import React from 'react';
import UpperBar from './upperbar';
import Dashboard from './dashboard';
import "./Welcome.css";

const Main_Dashboard = () => {
  return (
    <div className="main-container">
      <UpperBar />
      <div className="content-wrapper">
        <Dashboard />
        <div className="welcome-content">
          <div className="welcome-text">
            <h1 className="heading">WELCOME TO LILYPAD</h1>
            <p className="description">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim quam sequi voluptate quis consectetur? Consequuntur ut quia alias eveniet quis, aspernatur fugiat veritatis quo non ex molestias ad in mollitia assumenda odit expedita et perferendis fuga dolores dicta eos quaerat qui sapiente placeat. Impedit, odit fugit. Doloribus repudiandae veritatis amet in possimus. Deleniti odit consequuntur maxime tempora deserunt magni tenetur, quasi neque. Porro cumque, itaque sequi aliquam cum quam voluptatem? Maxime quod saepe minima, alias officiis facilis quis labore aut atque enim veritatis, aspernatur, itaque error earum sequi quas aliquid eveniet ex deleniti ratione odio laudantium libero voluptas totam. Molestias hic, ipsam aperiam totam ad, ea consequuntur reiciendis repudiandae, cupiditate itaque quasi temporibus quo eos! Voluptas labore iure, aliquid dolore veritatis voluptatibus atque vitae quibusdam eligendi nihil, dolores nobis sint perspiciatis error? Sunt recusandae labore aliquid ab vitae nihil magnam, vero ipsam fugit sapiente quaerat voluptatum aspernatur veniam inventore odio, qui, repellat dolor molestiae dolore nemo incidunt alias assumenda officia dolorum. Placeat id corrupti alias. Commodi quis dolore eligendi error numquam quam quia qui repellendus ratione dolores natus, omnis magnam, animi rerum, minima corporis ullam. Ad nam animi dolorum laborum eum velit numquam quisquam quia aut ipsa vel, assumenda molestias dicta rem. Aperiam, corporis! Quaerat neque sapiente at repellendus a suscipit voluptatem fuga iure magni ipsa deleniti culpa quas, quam fugit tempore distinctio amet itaque facere assumenda veritatis? Dicta esse, aliquid architecto saepe labore voluptas. Rem molestias ducimus minus, delectus cumque dicta officia nihil magni ex maxime fugit ad. Quae, autem corporis in id, quam necessitatibus minus aut, voluptates fugiat accusantium odit et vitae cum officia velit? Eos veritatis, et cumque possimus ipsum porro voluptate. Cum repellendus, sapiente architecto consectetur ab rem fugit officia, voluptatum necessitatibus voluptas iure atque, sint corrupti nihil natus distinctio mollitia! Harum doloribus laudantium neque.

            </p>
          </div>
          <div className="image-section">
            <img src="./src/assets/scoo.png" alt="Lilypad Electric Vehicles" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_Dashboard;
