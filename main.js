const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const defaultRatedCapacity = 120;

  const counts = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };

  presentCapacities.forEach((capacity) => {
    const sohValue = (capacity / defaultRatedCapacity) * 100;

    if (sohValue > 83) {
      counts.healthy++;
    } else if (sohValue >= 63) {
      counts.exchange++;
    } else {
      counts.failed++;
    }
  });

  return counts;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoHValue...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
