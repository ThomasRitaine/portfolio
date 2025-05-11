import React, { useState, useRef } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './Card.css';

function Card({ icon, transKey }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickLocked, setIsClickLocked] = useState(false);
  const { t } = useTranslation();
  const timeoutRef = useRef(null);

  const isFlipped = isClickLocked || isHovered;

  const handleMouseEnter = () => {
    if (!isClickLocked) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClickLocked) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 300); // 300ms delay
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClickLocked(!isClickLocked);

    if (!isClickLocked) {
      setIsHovered(false);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Col xs={4} md={2} className="tech-card-container">
      <div 
        className={`tech-card ${isFlipped ? "flipped" : ""} ${isClickLocked ? "locked" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="tech-card-front">
          {icon}
        </div>
        <div className="tech-card-back">
          <div className="tech-card-content">
            <h3>{t(`${transKey}.title`)}</h3>
            <p>{t(`${transKey}.description`)}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Card;
