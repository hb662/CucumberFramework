package page;

import java.util.Random;

public class BasePage {
	
	public int randomNumGenerator() {
		Random random = new Random();
		int rnd=random.nextInt(999);
		return rnd;
	}

}
