

function Step(dt)
{
	A1 = StepA1(dt,A0,A1,K);
	A0 = StepA0(dt,A0,A1,R);
}

function StepA1(dt,A0,A1,K)
{
	var A1Copy = CopyCell(A1);
	for(var c=1;c<A0.length-1;c++)
	{
		for(var r=1;r<A0[c].length-1;r++)
		{
			var al = A0[c-1][r];
			var ar = A0[c+1][r];
			var au = A0[c][r-1];
			var ab = A0[c][r+1];
			var a = A0[c][r];

			var delta = 0.25*(al+ar+au+ab)-a;
			A1Copy[c][r] += K*delta*dt;
		}
	}
	return A1Copy;
}

function StepA0(dt,A0,A1,R)
{
	A0Copy = CopyCell(A0);
	for(var c=1;c<A0.length-1;c++)
	{
		for(var r=1;r<A0[c].length-1;r++)
		{
			var a1 = A1[c][r];
			A0Copy[c][r] += R*a1*dt;
		}
	}
	return A0Copy;
}

