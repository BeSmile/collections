#### 方法1
const mapIterator = (map, cb) => {
  const agg = [];
  for(let [key, value] of map) {
    agg.push(cb(value, key));
  }
  return agg;
};

<div className='gallery__items'>
  {mapIterator(resultsByGuid, (result, index) => {
    key++;
    return this.renderGalleryItem(result, key);
  })}
</div>

#### 方法2
Array.from(map.values())进行转换
