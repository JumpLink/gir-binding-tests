namespace ValaObject {
	public void global_method(string lang)
	{
		print(@"Vala: global_method called from $lang!\n");
	}

	public class ValaClass : Object {

		public ValaClass() {
			print(@"Vala: ValaClass constrictor called\n");
		}

		public static void static_class_method(string lang) {
			print(@"Vala: static_class_method called from $lang!\n");
		}

		public void class_method(string lang) {
			print(@"Vala: class_method from $lang!\n");
		}
	}
	interface ValaInterface{

	}
}
