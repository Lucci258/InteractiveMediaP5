// 阵列初始化
function CreateCellArray(rowNum, colNum)
{
	var C = new Array();
	for(var c=0;c<colNum;c++)
	{
		var newCol = new Array();
		for(var r=0;r<rowNum;r++)
		{
			newCol[r] = 0;
		}
		C[c] = newCol;
	}
	return C;
}

function CreateVectorArray(rowNum, colNum)
{
	var C = new Array();
	for(var c=0;c<colNum;c++)
	{
		var newCol = new Array();
		for(var r=0;r<rowNum;r++)
		{
			newCol[r] = createVector(0,0);
		}
		C[c] = newCol;
	}
	return C;
}

function InitVector_Rand(maxLen,C)
{
	for(var c=0;c<C.length;c++)
	{
		for(var r=0;r<C[c].length;r++)
		{
			var L = random(0,maxLen);
			var angle = random(0,TWO_PI);
			var x = L * cos(angle);
			var y = L * sin(angle);
			var v = createVector(x,y);
			C[c][r] = v;
		}
	}
	return C;
}


function InitVector_Noise( C, maxLen, nscaleF)
{
	var leap = random(10000,100000);
	for(var c=0;c<C.length;c++)
	{
		for(var r=0;r<C[c].length;r++)
		{
			var L0 = noise(c*nscaleF,r*nscaleF);
			var angle0 = noise(leap+c*nscaleF,leap+r*nscaleF);
			var L = map(L0,0,1,0,maxLen);
			var angle = map(angle0,0,1,0,TWO_PI);
			var x = L * cos(angle);
			var y = L * sin(angle);
			var v = createVector(x,y);
			C[c][r] = v;
		}
	}
	return C;
}

function InitCells_Rand(min,max,C)
{
	for(var c=0;c<C.length;c++)
	{
		for(var r=0;r<C[c].length;r++)
		{
			C[c][r] = random(min,max);
		}
	}
	return C;
}

function InitCells_Noise(min,max,C, scaleF)
{
	var randBias = random(0,10000);
	for(var c=0;c<C.length;c++)
	{
		for(var r=0;r<C[c].length;r++)
		{
			C[c][r] = 
				map(noise(c*scaleF+randBias,r*scaleF+randBias),0,1,-1,1);
		}
	}
	return C;
}

