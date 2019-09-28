import React from 'react';
import types from './types';
import * as CS from './style';

const ProgressCard = React.memo(({isComplete, isActive, activeText, notActiveText, backText}) => (
    <CS.Root $isComplete={isComplete} $isActive={isActive}>
      <CS.Decore $topLeft />
      <CS.Decore $bottomRight />
      {isComplete && <CS.Icon name="icon-ok" />}
      {isActive && <CS.BackText>{backText}</CS.BackText>}
      {isActive && (<CS.ActiveText>{activeText}</CS.ActiveText>)}
      {!isComplete && !isActive && (<CS.NotActiveText>{notActiveText}</CS.NotActiveText>)}
    </CS.Root>
));

ProgressCard.propTypes = types.propTypes;

export default ProgressCard;
