(function (d3) {
  'use strict';

  const svg = d3.select('svg');
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;

  const margin = { top: 0, right: 50, bottom: 0, left: 75};

  const scale = 1/32;
  const thumbnailWidth = 960 * scale;
  const thumbnailHeight = 500 * scale;
  const nodeWidth = thumbnailWidth * 1.5;
  const nodeHeight = thumbnailHeight;
  const treeLayout = d3.tree()
    .nodeSize([nodeHeight, nodeWidth])
    .separation(() => 1.2);

  const zoomG = svg
      .attr('width', width)
      .attr('height', height)
    .append('g');

  const g = zoomG.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

  svg.call(d3.zoom().on('zoom', () => {
    zoomG.attr('transform', d3.event.transform);
  }));

  const buildHierarchy = data => {
    const ids = {};// '-99': true};
    
    data.forEach(d => {
      ids[d.id] = true;
    });
    data.forEach(d => {
      d.forkedFrom = ids[d.forkedFrom]
        ? d.forkedFrom
        : '-99';
    });
    data.push({id: '-99'});
    
    return d3.stratify()
      .id(d => d.id)
      .parentId(d => d.forkedFrom)
      (data);
  };

  d3.json('https://vizhub.com/api/visualization/metadata')
    .then(data => {
      const root = buildHierarchy(data);
      const links = treeLayout(root).links();
    
      g.selectAll('path').data(links)
        .enter().append('line')
          .attr('x1', d => d.source.y + thumbnailWidth / 2)
          .attr('x2', d => d.target.y - thumbnailWidth / 2)
          .attr('y1', d => d.source.x)
          .attr('y2', d => d.target.x);
      g.selectAll('image').data(root.descendants())
        .enter().append('image')
          .attr('x', d => d.y - thumbnailWidth / 2)
          .attr('y', d => d.x - thumbnailHeight / 2)
          .attr('width', thumbnailWidth)
          .attr('href', (d, i) => `/api/visualization/thumbnail/${d.id}.png`);
    });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdCxcbiAganNvbixcbiAgdHJlZSxcbiAgaGllcmFyY2h5LFxuICBsaW5rSG9yaXpvbnRhbCxcbiAgem9vbSxcbiAgZXZlbnQsXG4gIHN0cmF0aWZ5XG59IGZyb20gJ2QzJztcblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcbmNvbnN0IHdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbmNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXG5jb25zdCBtYXJnaW4gPSB7IHRvcDogMCwgcmlnaHQ6IDUwLCBib3R0b206IDAsIGxlZnQ6IDc1fTtcbmNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuY29uc3Qgc2NhbGUgPSAxLzMyO1xuY29uc3QgdGh1bWJuYWlsV2lkdGggPSA5NjAgKiBzY2FsZTtcbmNvbnN0IHRodW1ibmFpbEhlaWdodCA9IDUwMCAqIHNjYWxlO1xuY29uc3Qgbm9kZVdpZHRoID0gdGh1bWJuYWlsV2lkdGggKiAxLjU7XG5jb25zdCBub2RlSGVpZ2h0ID0gdGh1bWJuYWlsSGVpZ2h0O1xuY29uc3QgdHJlZUxheW91dCA9IHRyZWUoKVxuICAubm9kZVNpemUoW25vZGVIZWlnaHQsIG5vZGVXaWR0aF0pXG4gIC5zZXBhcmF0aW9uKCgpID0+IDEuMik7XG5cbmNvbnN0IHpvb21HID0gc3ZnXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgLmFwcGVuZCgnZycpO1xuXG5jb25zdCBnID0gem9vbUcuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG5zdmcuY2FsbCh6b29tKCkub24oJ3pvb20nLCAoKSA9PiB7XG4gIHpvb21HLmF0dHIoJ3RyYW5zZm9ybScsIGV2ZW50LnRyYW5zZm9ybSk7XG59KSk7XG5cbmNvbnN0IGJ1aWxkSGllcmFyY2h5ID0gZGF0YSA9PiB7XG4gIGNvbnN0IGlkcyA9IHt9Oy8vICctOTknOiB0cnVlfTtcbiAgXG4gIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICBpZHNbZC5pZF0gPSB0cnVlO1xuICB9KTtcbiAgZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgIGQuZm9ya2VkRnJvbSA9IGlkc1tkLmZvcmtlZEZyb21dXG4gICAgICA/IGQuZm9ya2VkRnJvbVxuICAgICAgOiAnLTk5JztcbiAgfSk7XG4gIGRhdGEucHVzaCh7aWQ6ICctOTknfSk7XG4gIFxuICByZXR1cm4gc3RyYXRpZnkoKVxuICAgIC5pZChkID0+IGQuaWQpXG4gICAgLnBhcmVudElkKGQgPT4gZC5mb3JrZWRGcm9tKVxuICAgIChkYXRhKTtcbn07XG5cbmpzb24oJ2h0dHBzOi8vdml6aHViLmNvbS9hcGkvdmlzdWFsaXphdGlvbi9tZXRhZGF0YScpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBidWlsZEhpZXJhcmNoeShkYXRhKTtcbiAgICBjb25zdCBsaW5rcyA9IHRyZWVMYXlvdXQocm9vdCkubGlua3MoKTtcbiAgXG4gICAgZy5zZWxlY3RBbGwoJ3BhdGgnKS5kYXRhKGxpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS55ICsgdGh1bWJuYWlsV2lkdGggLyAyKVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LnkgLSB0aHVtYm5haWxXaWR0aCAvIDIpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC54KTtcbiAgICBnLnNlbGVjdEFsbCgnaW1hZ2UnKS5kYXRhKHJvb3QuZGVzY2VuZGFudHMoKSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnaW1hZ2UnKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC55IC0gdGh1bWJuYWlsV2lkdGggLyAyKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC54IC0gdGh1bWJuYWlsSGVpZ2h0IC8gMilcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGh1bWJuYWlsV2lkdGgpXG4gICAgICAgIC5hdHRyKCdocmVmJywgKGQsIGkpID0+IGAvYXBpL3Zpc3VhbGl6YXRpb24vdGh1bWJuYWlsLyR7ZC5pZH0ucG5nYClcbiAgfSk7Il0sIm5hbWVzIjpbInNlbGVjdCIsInRyZWUiLCJ6b29tIiwiZXZlbnQiLCJzdHJhdGlmeSIsImpzb24iXSwibWFwcGluZ3MiOiI7OztFQVdBLE1BQU0sR0FBRyxHQUFHQSxTQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDMUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7RUFDeEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7O0VBRTFDLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pEO0VBR0EsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNuQixNQUFNLGNBQWMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0VBQ25DLE1BQU0sZUFBZSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7RUFDcEMsTUFBTSxTQUFTLEdBQUcsY0FBYyxHQUFHLEdBQUcsQ0FBQztFQUN2QyxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUM7RUFDbkMsTUFBTSxVQUFVLEdBQUdDLE9BQUksRUFBRTtLQUN0QixRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDakMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0VBRXpCLE1BQU0sS0FBSyxHQUFHLEdBQUc7T0FDWixJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztPQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztLQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0VBRWYsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7T0FDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRWxFLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE9BQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtJQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRUMsUUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQzFDLENBQUMsQ0FBQyxDQUFDOztFQUVKLE1BQU0sY0FBYyxHQUFHLElBQUksSUFBSTtJQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7O0lBRWYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUk7TUFDaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUk7TUFDaEIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztVQUM1QixDQUFDLENBQUMsVUFBVTtVQUNaLEtBQUssQ0FBQztLQUNYLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7SUFFdkIsT0FBT0MsV0FBUSxFQUFFO09BQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO09BQ2IsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO09BQzNCLElBQUksQ0FBQyxDQUFDO0dBQ1YsQ0FBQzs7QUFFRkMsU0FBSSxDQUFDLCtDQUErQyxDQUFDO0tBQ2xELElBQUksQ0FBQyxJQUFJLElBQUk7TUFDWixNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDbEMsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOztNQUV2QyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUIsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztXQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1dBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7V0FDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7V0FDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztXQUNyQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7V0FDeEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1dBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1dBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQztLQUN4RSxDQUFDOzs7OyJ9