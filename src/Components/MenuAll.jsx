import { motion } from "framer-motion";
import imgAllMenu from "../img/undraw_barbecue.svg";
import imgBackstrap from "../img/venison-backstrap.jpg";

import imgLLC from "../img/LLC.png";
import { css, jsx } from "@emotion/react";

const MenuAll = ({ all, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {all &&
        items.map((item, i) => (
          <motion.div
            className="menu-items"
            key={item.id}
            variants={itemContainer}
            transition={{ delay: i * 0.2 }}
          >
            <img src={imgBackstrap} alt="food burger" />
            <motion.div className="item-content">
              <motion.div className="item-title-box">
                <motion.h5 className="item-title">{item.title}</motion.h5>
                <motion.h5 className="item-price">${item.price}</motion.h5>

              </motion.div>
              <motion.p className="item-desc">{item.desc}</motion.p>
              <motion.input type="checkbox" className="item-checkbox" css={css` display: flex;`}></motion.input>
              <motion.input type="checkbox" className="item-checkbox" css={css` display: flex;`}></motion.input>

            </motion.div>
          </motion.div>
        ))}
    </>
  );
};

export default MenuAll;
