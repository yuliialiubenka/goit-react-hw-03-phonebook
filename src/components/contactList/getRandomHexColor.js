export const getRandomHexColor = () => "#"+(((1+Math.random())*(1<<24)|0).toString(16)).substr(-6);

