

function longChemin(coords) {
        var long = 0;
        var point1, point2;

        //console.log(point);
        for (var i = 1; i < coords.length; i++) {
          point1 = coords[i-1];
          point2 = coords[i]
          long = long + distance(point1, point2);
          console.log(long);
        }
      }