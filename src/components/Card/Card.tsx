import * as React from 'react';
import './Card.scss';

interface IProps {
  data?: any;
}

const imageNotAvailable = 'https://juiceduk.com/pole-tricks-handbook-1.jpg';

const Card = ({ data }: IProps) => (
  <div className="column is-one-third">
    <a href={data.permalink} target="_blank">
      <div className="card card-modifier">
        <div className="card-image">
          <figure
            className="image is-2by3"
            style={{
              background: `url(${data.thumbnail || imageNotAvailable}) no-repeat 50%/contain`
            }}
          />
        </div>
        <div className="card-content card-content-modifier">
          <div className="content">
            <h4>R${data.price}</h4>
            {data.shipping.free_shipping &&
              <small className="free-shipping">Free Shipping</small>
            }
            <p>{data.title}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default Card;