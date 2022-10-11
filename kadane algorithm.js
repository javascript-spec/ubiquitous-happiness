<script>

// contiguous array sum
 
function maxSubArraySum(a,size)
{
  let max_so_far = a[0];
  let curr_max = a[0];
 
  for (let i = 1; i < size; i++)
  {
      curr_max = Math.max(a[i], curr_max+a[i]);
      max_so_far = Math.max(max_so_far, curr_max);
  }
 
return max_so_far;
}
 
// Driver code
 
let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let n = a.length;
document.write("Maximum contiguous sum is ",maxSubArraySum(a, n));
     
</script>
