var torus = ( function() {

	function createVertexData() {
		var n = 16;
		var m = 32;

		// Positions.
		this.vertices = new Float32Array(3 * (n + 1) * (m + 1));
		var vertices = this.vertices;
		// Normals.
		this.normals = new Float32Array(3 * (n + 1) * (m + 1));
		var normals = this.normals;
		// Index data.
		this.indicesLines = new Uint16Array(2 * 2 * n * m);
		var indicesLines = this.indicesLines;
		this.indicesTris = new Uint16Array(3 * 2 * n * m);
		var indicesTris = this.indicesTris;

		var du = 2 * Math.PI / n;
		var dv = 2 * Math.PI / m;
		var r = 0.3;
		var R = 0.5;
		// Counter for entries in index array.
		var iLines = 0;
		var iTris = 0;

		// Loop angle u.
		for(var i = 0, u = 0; i <= n; i++, u += du) {
			// Loop angle v.
			for(var j = 0, v = 0; j <= m; j++, v += dv) {

				var iVertex = i * (m + 1) + j;

				var x = (R + r * Math.cos(u) ) * Math.cos(v);
				var y = (R + r * Math.cos(u) ) * Math.sin(v);
				var z = r * Math.sin(u);

				// Set vertex positions.
				vertices[iVertex * 3] = x;
				vertices[iVertex * 3 + 1] = y;
				vertices[iVertex * 3 + 2] = z;

				// Calc and set normals.
				var nx = Math.cos(u) * Math.cos(v);
				var ny = Math.cos(u) * Math.sin(v);
				var nz = Math.sin(u);
				normals[iVertex * 3] = nx;
				normals[iVertex * 3 + 1] = ny;
				normals[iVertex * 3 + 2] = nz;

				// if(i>14){
				// continue;
				// }

				// Set index.
				// Line on beam.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - 1;
					indicesLines[iLines++] = iVertex;
				}
				// Line on ring.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - (m + 1);
					indicesLines[iLines++] = iVertex;
				}

				// Set index.
				// Two Triangles.
				if(j > 0 && i > 0) {
					indicesTris[iTris++] = iVertex;
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
					//
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1) - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
				}
			}
		}
	}

	return {
		createVertexData : createVertexData
	}

}());



var pillow = ( function() {

	function createVertexData() {
		var n = 40;
		var m = 40;

		// Positions.
		this.vertices = new Float32Array(3 * (n+1) * (m+1));
		var vertices = this.vertices;
		// Normals.
		this.normals = new Float32Array(3 * (n+1) * (m+1));
		var normals = this.normals;
		// Index data.
		this.indicesLines = new Uint16Array(2 * 2 * n * m);
		var indicesLines = this.indicesLines;
		this.indicesTris = new Uint16Array(3 * 2 * n * m);
		var indicesTris = this.indicesTris;

		var du = Math.PI/n;
		var dv = 2 * Math.PI/m;
		// Counter for entries in index array.
		var iLines = 0;
		var iTris = 0;

		// Loop angle u.
		for(var i=0, u=0; i <= n; i++, u += du) {
			// Loop angle v.
			for(var j=0, v=-Math.PI; j <= m; j++, v += dv) {

				var iVertex = i * (m + 1) + j;

				var x =0.99* Math.cos(u);
				var z =0.88*Math.cos(v);
				var y = 0.3* Math.sin(u)* Math.sin(v);

				// Set vertex positions.
				vertices[iVertex * 3] = x;
				vertices[iVertex * 3 + 1] = y;
				vertices[iVertex * 3 + 2] = z;

				// Calc and set normals.
				var nx = Math.cos(u) * Math.cos(v);
				var ny = Math.cos(u) * Math.sin(v);
				var nz = Math.sin(u);
				var vertexLength =0.8*(x*x+y*y+z*z); 
				normals[iVertex * 3] = 1- vertexLength;;
				normals[iVertex * 3 + 1] =1- vertexLength;;
				normals[iVertex * 3 + 2] = 1- vertexLength;;

				// if(i>14){
				// continue;
				// }

				// Set index.
				// Line on beam.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - 1;
					indicesLines[iLines++] = iVertex;
				}
				// Line on ring.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - (m + 1);
					indicesLines[iLines++] = iVertex;
				}

				// Set index.
				// Two Triangles.
				if(j > 0 && i > 0) {
					indicesTris[iTris++] = iVertex;
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
					//
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1) - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
				}
			}
		}
	}

	return {
		createVertexData : createVertexData
	}

}());

var plan = ( function() {
	console.log("In pLan")

	function createVertexData() {
		var n = 100;
		var m = 100;

		// Positions.
		this.vertices = new Float32Array(3 * (n+1) * (m+1));
		var vertices = this.vertices;
		// Normals.
		this.normals = new Float32Array(3 * (n+1) * (m+1));
		var normals = this.normals;
		// Index data.
		this.indicesLines = new Uint16Array(2 * 2 * n * m);
		var indicesLines = this.indicesLines;
		this.indicesTris = new Uint16Array(3 * 2 * n * m);
		var indicesTris = this.indicesTris;

		var  du  =  20  /  n ;
        var  dv  =  20  /  m ;
		// Counter for entries in index array.
		var iLines = 0;
		var iTris = 0;

		// Loop angle u.
		for(var  i  =  0 ,  u  =  - 10 ;  i  <=  n ;  i ++ ,  u  +=  du ) {
			// Loop angle v.
			for( var  j  =  0 ,  v  =  - 10 ;  j  <=  m ;  j ++ ,  v  +=  dv) {

				var  iVertex  =  i  *  ( m  +  1 )  +  j ;

                var  x  =  u ;
                var  y  =  0 ;
                var  z  =  v;

                // Set vertex positions.
                vertices [ iVertex  *  3 ]  =  x ;
                vertices [ iVertex  *  3  +  1 ]  =  y ;
                vertices [ iVertex  *  3  +  2 ]  =  z ;

                // Calc and set normals.
                normals [ iVertex  *  3 ]  =  0 ;
                normals [ iVertex  *  3  +  1 ]  =  1 ;
                normals [ iVertex  *  3  +  2 ]  =  0 ;

				// if(i>14){
				// continue;
				// }

				// Set index.
				// Line on beam.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - 1;
					indicesLines[iLines++] = iVertex;
				}
				// Line on ring.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - (m + 1);
					indicesLines[iLines++] = iVertex;
				}

				// Set index.
				// Two Triangles.
				if(j > 0 && i > 0) {
					indicesTris[iTris++] = iVertex;
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
					//
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1) - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
				}
			}
		}
	}

	return {
		createVertexData : createVertexData
	}

}());